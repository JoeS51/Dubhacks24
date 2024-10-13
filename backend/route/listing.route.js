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
        const { parentUsername, position, address, start, end, price, rating, numRatings, title, occupied, description } = req.body;

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

export default router;