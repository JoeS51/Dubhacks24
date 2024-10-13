import express from 'express'
import Listing from '../model/listing.model.js';
import mongoose from 'mongoose';
const router = express.Router();

router.get('/get/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Received request for listing with ID:', id);

        // Check if the id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.log('Invalid ObjectId format');
            return res.status(400).json({ message: 'Invalid listing ID format' });
        }

        // Find the listing by ID
        const listing = await Listing.findById(id);

        if (!listing) {
            console.log('Listing not found in database');
            return res.status(404).json({ message: 'Listing not found' });
        }

        console.log('Listing found successfully');
        res.status(200).json(listing);
    } catch (error) {
        console.error("Error fetching listing:", error);
        res.status(500).json({ message: 'Error fetching listing', error: error.message });
    }
});

router.get('/nearby', async (req, res) => {
    try {
        const { lat, lng, maxDistanceInMiles } = req.query; // Expect maxDistance in miles

        if (!lat || !lng) {
            return res.status(400).json({ message: 'Latitude and longitude are required' });
        }

        // Convert maxDistance from miles to meters (1 mile = 1609.34 meters)
        const maxDistance = maxDistanceInMiles ? parseFloat(maxDistanceInMiles) * 1609.34 : 1000000; // Default to 1,000,000 meters if not provided

        const nearbyListings = await Listing.aggregate([
            {
                $geoNear: {
                    near: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
                    distanceField: "distance",
                    maxDistance: maxDistance,
                    spherical: true
                }
            }
        ]);

        res.status(200).json(nearbyListings);
    } catch (error) {
        console.error("Error fetching nearby listings:", error);
        res.status(500).json({ message: 'Error fetching nearby listings', error: error.message });
    }
});

router.get('/markers', async (req, res) => {
    try {
        // Fetch all listings from the database
        const listings = await Listing.find({}, '_id position');

        // Map through the listings to extract the required fields
        const result = listings.map(listing => {
            const { _id, position } = listing;

            // Ensure the position is defined and has coordinates
            if (position && position.type === 'Point' && position.coordinates.length === 2) {
                const [lng, lat] = position.coordinates; // Destructure the coordinates
                return {
                    id: _id,
                    lat: lat,
                    lng: lng
                };
            }

            // Return null if position is not valid
            return null;
        }).filter(item => item !== null); // Filter out any null entries

        // Send the result as JSON
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching coordinates:", error);
        res.status(500).json({ message: 'Error fetching coordinates', error: error.message });
    }

});

router.get('/filter', async (req, res) => {
    try {
        const {
            id,
            start,
            end,
            lat,
            lng,
            maxDistance = 1000000,
            size,
            type,
            minPrice,
            maxPrice,
            numRatings
        } = req.query;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.log('Invalid ObjectId format');
            return res.status(400).json({ message: 'Invalid listing ID format' });
        }

        const filter = {};

        if (id) filter._id = id;
        if (start) filter.start = { $gte: new Date(start) }; // Start date filter
        if (end) filter.end = { $lte: new Date(end) }; // End date filter
        if (lat && lng) {
            filter.position = {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [parseFloat(lng), parseFloat(lat)]
                    },
                    $maxDistance: parseInt(maxDistance)
                }
            };
        }
        if (size) filter.size = size; // Size filter
        if (type) filter.type = type; // Type filter
        if (minPrice) filter.price = { $gte: parseFloat(minPrice) }; // Minimum price filter
        if (maxPrice) filter.price = { $lte: parseFloat(maxPrice) }; // Maximum price filter
        if (numRatings) filter.numRatings = { $gte: parseInt(numRatings) }; // Minimum number of ratings filter

        const listings = await Listing.find(filter);

        res.status(200).json(listings);
    } catch (error) {
        console.error("Error fetching filtered listings:", error);
        res.status(500).json({ message: 'Error fetching filtered listings', error: error.message });
    }
});



router.get('/get', async (req, res) => {
    try {
        const listings = await Listing.find(); // Fetch all listings from the database
        res.status(200).send(listings); // Send the listings as the response
    } catch (error) {
        console.error("Error fetching listings:", error);
        res.status(500).send({ message: 'Error fetching listings', error: error.message });
    }
});


router.post('/add', async (req, res) => {
    try {
        const { parentUsername, position, address, start, end, price, rating, numRatings, title, occupied, type, size, description } = req.body;

        // Create a new listing
        const newListing = new Listing({
            parentUsername,
            position,
            address,
            start,
            end,
            price,
            rating,
            numRatings,
            title,
            occupied,
            type,
            size,
            description
        });

        // Save the listing to the database
        await newListing.save();

        res.status(201).json({ message: 'Listing added successfully!', listing: newListing });
    } catch (err) {
        console.error("Error adding listing:", err); // Log the actual error
        res.status(500).json({ message: "Internal Server Error", error: err.message }); // Include error message in response
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid listing ID format' });
        }

        // Find the listing by ID and delete it
        const deletedListing = await Listing.findByIdAndDelete(id);

        if (!deletedListing) {
            return res.status(404).json({ message: 'Listing not found' });
        }

        res.status(200).json({ message: 'Listing deleted successfully', deletedListing });
    } catch (error) {
        console.error("Error deleting listing:", error);
        res.status(500).json({ message: 'Error deleting listing', error: error.message });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Received update request for ID:', id);

        // Check if the id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            console.log('Invalid ObjectId format');
            return res.status(400).json({ message: 'Invalid listing ID format' });
        }

        const updateData = req.body;
        console.log('Update data:', updateData);

        // Find the listing by ID and update it
        const updatedListing = await Listing.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        if (!updatedListing) {
            console.log('Listing not found in database');
            return res.status(404).json({ message: 'Listing not found' });
        }

        console.log('Listing updated successfully');
        res.status(200).json({ message: 'Listing updated successfully', listing: updatedListing });
    } catch (error) {
        console.error("Error in update route:", error);
        res.status(500).json({ message: 'Error updating listing', error: error.message });
    }
});

router.get('/read', async (req, res) => {
    try {
        Listing.find({}, (err, result) => {
            // console.log(result);
            res.body = result;
            res.status(201).json({ message: "listings fetched successfully!", listing: result });
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", error: err.message }); // Include error message in response
    }
});

export default router;