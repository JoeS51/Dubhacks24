const { MongoClient } = require("mongodb");
const axios = require('axios');

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://sheepca03:DQQVtnIZ8a7exjWT@cluster0.j6o91.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
const dbName = 'dubhacks24'
let db, listingCollection, rentingCollection;


async function readAllAsJson() {
  try {
    const [listings, rentals] = await Promise.all([
      listingCollection.find({}).toArray(),
      rentingCollection.find({}).toArray()
    ]);
    const result = { listings, rentals };
    const json = JSON.stringify(result, null, 2);

    console.log('All Documents as JSON:', json);

    return json;  // Return the JSON string
  } catch (err) {
    console.error('Read operation failed:', err);
    return null;
  }
}

async function sortLocByDist(long, lat) {
    await listingCollection.createIndex({ position: "2dsphere" });
    const locations = await listingCollection.find({
        position: {
            $near: {
                $geometry: {
                    coordinates: [long, lat]
                }
            }
        }
    }).toArray();

    const json = JSON.stringify(locations, null, 2);

    console.log('All Documents as JSON:', json);

    return json;
}

async function filterLocByDist(address, miles) {
    try {
        // Step 1: Geocode the address to get latitude and longitude
        const { latitude, longitude } = await geocodeAddress(address);

        // Step 2: Convert the radius from miles to meters
        const radiusInMeters = miles * 1609.34;

        // Ensure the geospatial index is created on the position field
        await listingCollection.createIndex({ position: "2dsphere" });

        // Step 3: Query locations based on proximity and limit to the given radius
        const locations = await listingCollection.find({
            position: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [longitude, latitude]  // Dynamic long and lat values
                    },
                    $maxDistance: radiusInMeters  // Maximum distance in meters
                }
            }
        }).toArray();

        const json = JSON.stringify(locations, null, 2);

        console.log('All Documents as JSON:', json);

        return json;
    } catch (error) {
        console.error("Error filtering locations by distance:", error);
        throw error;
    }
}


async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(dbName)
    listingCollection = db.collection('listingCollection');
    rentingCollection = db.collection('rentingCollection');
    await filterLocByDist(10,10,5000000)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// async function writeListing(id, username, lat, long, start, end, price, desc, city, state, street, zipcode) {
//   try {
//     await client.connect();

//     const database = client.db('dubhacks24');
//     const collection = database.collection('listingDB');

//     collection.insert(
//       {
//         "_id": id,  
//         "parentUsername": username,  
//         "position": {          
//             "city": city,
//             "state": state,
//             "street": street,
//             "zipcode": zipcode,
//             "coordinates": [long, lat]  
//         },
//         "start": start, 
//         "end": end, 
//         "price": price,       
//         "description": desc
//       }
//     )
//   } finally {
//     await client.close();
//   }
// }

async function writeListing(parentUsername, long, lat, start, end, price, description, address) {
    // Define the new listing document structure
    const newListing = {
        parentUsername: parentUsername,    // The parent username
        position: {
            type: "Point",                 // GeoJSON format for geospatial queries
            coordinates: [long, lat]       // Longitude and latitude
        },
        start: new Date(start).toISOString(),  // Start time (convert to ISO string if needed)
        end: new Date(end).toISOString(),      // End time (convert to ISO string if needed)
        price: price,                        // The price of the listing
        description: description,            // Description of the listing
        address: {                           // Optional address information
            city: address.city,
            state: address.state,
            zipcode: address.zipcode,
            street: address.street
        }
    };

    // Insert the new listing document into the MongoDB collection
    try {
        const result = await listingCollection.insertOne(newListing);
        console.log("Listing inserted with ID:", result.insertedId);
        return result.insertedId;  // Return the ID of the inserted document
    } catch (err) {
        console.error("Error inserting listing:", err);
        throw err;
    }
}

// async function writeRenting(parentUsername, childUsername, long, lat, start, end, price, description, address) {
//     // Define the new renting document structure
//     const newRenting = {
//         parentUsername: parentUsername,    // The parent username
//         childUsername: childUsername,      // The child username (representing the renting user)
//         position: {
//             type: "Point",                 // GeoJSON format for geospatial queries
//             coordinates: [long, lat]       // Longitude and latitude
//         },
//         start: new Date(start).toISOString(),  // Start time (convert to ISO string if needed)
//         end: new Date(end).toISOString(),      // End time (convert to ISO string if needed)
//         price: price,                        // The price of the renting period
//         description: description,            // Description of the renting period
//         address: {                           // Optional address information
//             city: address.city,
//             state: address.state,
//             zipcode: address.zipcode,
//             street: address.street
//         }
//     };

//     // Insert the new renting document into the MongoDB collection
//     try {
//         const result = await rentingCollection.insertOne(newRenting);
//         console.log("Renting inserted with ID:", result.insertedId);
//         return result.insertedId;  // Return the ID of the inserted document
//     } catch (err) {
//         console.error("Error inserting renting:", err);
//         throw err;
//     }
// }

async function deleteListing(listingId) {
    try {
        // Delete the listing document based on its unique ID
        const result = await listingCollection.deleteOne({ _id: listingId });

        if (result.deletedCount === 1) {
            console.log("Successfully deleted listing with ID:", listingId);
            return true;  // Return true if the document was successfully deleted
        } else {
            console.log("No listing found with the given ID:", listingId);
            return false;  // Return false if no document was deleted
        }
    } catch (err) {
        console.error("Error deleting listing:", err);
        throw err;  // Throw an error if something went wrong during deletion
    }
}

async function deleteRenting(rentingId) {
    try {
        // Delete the renting document based on its unique ID
        const result = await rentingCollection.deleteOne({ _id: rentingId });

        if (result.deletedCount === 1) {
            console.log("Successfully deleted renting with ID:", rentingId);
            return true;  // Return true if the document was successfully deleted
        } else {
            console.log("No renting found with the given ID:", rentingId);
            return false;  // Return false if no document was deleted
        }
    } catch (err) {
        console.error("Error deleting renting:", err);
        throw err;  // Throw an error if something went wrong during deletion
    }
}

async function countListings() {
    try {
        const count = await listingCollection.countDocuments({});
        console.log(`Total number of listings: ${count}`);
        return count;  // Return the count of listings
    } catch (err) {
        console.error("Error counting listings:", err);
        throw err;
    }
}

async function calculateAveragePrice(address, radius) {
    try {
        // Step 1: Geocode the address to get latitude and longitude
        const { latitude, longitude } = await geocodeAddress(address);

        // Step 2: Calculate the average price of listings within the given radius
        const result = await listingCollection.aggregate([
            {
                $geoNear: {
                    near: { type: "Point", coordinates: [longitude, latitude] }, // GeoJSON format
                    distanceField: "dist.calculated", // Store distance to the point
                    maxDistance: radius * 1609.34, // Convert miles to meters
                    spherical: true, // Use spherical geometry
                    query: {} // Optionally include any additional query criteria
                }
            },
            {
                $group: {
                    _id: null,                   // Grouping by a constant to get a single result
                    averagePrice: { $avg: "$price" }  // Calculate the average price
                }
            }
        ]).toArray();

        const averagePrice = result.length > 0 ? result[0].averagePrice : 0;
        console.log(`Average price of listings in the area: ${averagePrice}`);
        return averagePrice;  // Return the average price
    } catch (err) {
        console.error("Error calculating average price:", err);
        throw err;
    }
}


async function sortListingsByPrice(order = 'asc') {
    try {
        const sortOrder = order === 'asc' ? 1 : -1;  // Set sort order: 1 for ascending, -1 for descending
        
        const sortedListings = await listingCollection.find({})
            .sort({ price: sortOrder }) // Sort by price
            .toArray(); // Convert the cursor to an array

        console.log(`Listings sorted by price in ${order} order:`, sortedListings);
        return sortedListings; // Return the sorted listings
    } catch (err) {
        console.error("Error sorting listings by price:", err);
        throw err;
    }
}

async function filterAndSortListingsByPriceRange(minPrice, maxPrice, order = 'asc') {
    try {
        const sortOrder = order === 'asc' ? 1 : -1; // Set sort order: 1 for ascending, -1 for descending

        const filteredSortedListings = await listingCollection.find({
            price: {
                $gte: minPrice, // Greater than or equal to minPrice
                $lte: maxPrice   // Less than or equal to maxPrice
            }
        })
        .sort({ price: sortOrder }) // Sort by price
        .toArray(); // Convert the cursor to an array

        console.log(`Listings filtered and sorted by price range (${minPrice} - ${maxPrice}) in ${order} order:`, filteredSortedListings);
        return filteredSortedListings; // Return the filtered and sorted listings
    } catch (err) {
        console.error("Error filtering and sorting listings by price range:", err);
        throw err;
    }
}

async function checkAvailability(startDate, endDate) {
    try {
        // Parse the input dates to ensure they are in the correct format
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Check for valid dates
        if (isNaN(start) || isNaN(end) || start >= end) {
            throw new Error("Invalid date range. Ensure that start date is before end date.");
        }

        // Find listings that are not booked during the specified date range
        const availableListings = await listingCollection.find({
            $nor: [
                {
                    // Check if any existing bookings overlap with the requested dates
                    start: { $lt: end }, // Existing booking starts before the requested end date
                    end: { $gt: start }  // Existing booking ends after the requested start date
                }
            ]
        }).toArray(); // Convert the cursor to an array

        console.log(`Available listings from ${startDate} to ${endDate}:`, availableListings);
        return availableListings; // Return the available listings
    } catch (err) {
        console.error("Error checking availability:", err);
        throw err;
    }
}


async function geocodeAddress(address) {
    const apiKey = 'AIzaSyCkuzW1WbWBbDGhQsT5aIKR2q4ww1RnFKQ';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const location = response.data.results[0].geometry.location;
        return {
            latitude: location.lat,
            longitude: location.lng,
        };
    } catch (error) {
        console.error("Error geocoding address:", error);
        throw error;
    }
}

async function writeListing(parentUsername, address, start, end, price, description) {
    try {
        // Geocode the address to get latitude and longitude
        const { latitude, longitude } = await geocodeAddress(address);

        // Prepare the listing document
        const listingDocument = {
            parentUsername: parentUsername,
            position: {
                type: "Point",
                coordinates: [longitude, latitude], // GeoJSON format: [longitude, latitude]
            },
            start: new Date(start), // Convert to Date object
            end: new Date(end),     // Convert to Date object
            price: price,
            description: description,
        };

        // Insert the document into the collection
        const result = await listingCollection.insertOne(listingDocument);
        console.log("Listing inserted with ID:", result.insertedId);
        return result.insertedId; // Return the inserted ID
    } catch (err) {
        console.error("Error inserting listing:", err);
        throw err;
    }
}

async function createRenting(childUsername, startDate, endDate, listing_id) {
    try {
        // Step 1: Retrieve the existing listing
        const existingListing = await listingCollection.findOne({ _id: listing_id });
        if (!existingListing) {
            throw new Error("Listing not found.");
        }

        // Parse the start and end dates
        const start = new Date(startDate);
        const end = new Date(endDate);
        const listingStart = new Date(existingListing.start);
        const listingEnd = new Date(existingListing.end);

        // Step 2: Check if the new renting dates partition the existing date range
        if (start < listingStart || end > listingEnd || start >= end) {
            throw new Error("Invalid date range for renting.");
        }

        // Step 3: Create the new renting document
        const newRentingDocument = {
            parentUsername: existingListing.parentUsername,
            childUsername: childUsername,
            position: existingListing.position,
            start: start,
            end: end,
            price: existingListing.price,
            address: existingListing.address, // Include the address
        };

        // Insert the new renting document into the renting collection
        await rentingCollection.insertOne(newRentingDocument);

        // Create new listings for the partitions
        const newListings = [];

        // Create a listing from the old range to the new start
        if (listingStart < start) {
            newListings.push({
                parentUsername: existingListing.parentUsername,
                position: existingListing.position,
                start: listingStart,
                end: start,
                price: existingListing.price,
                description: existingListing.description,
                address: existingListing.address, // Include the address
            });
        }

        // Create a listing from the new end to the old end
        if (listingEnd > end) {
            newListings.push({
                parentUsername: existingListing.parentUsername,
                position: existingListing.position,
                start: end,
                end: listingEnd,
                price: existingListing.price,
                description: existingListing.description,
                address: existingListing.address, // Include the address
            });
        }

        // Step 4: Insert new listings into the collection
        const insertPromises = newListings.map(listing => 
            listingCollection.insertOne(listing)
        );
        await Promise.all(insertPromises);

        // Step 5: Delete the old listing
        await listingCollection.deleteOne({ _id: listing_id });

        console.log("New renting created and old listing deleted.");
    } catch (error) {
        console.error("Error creating renting:", error);
        throw error;
    }
}

async function aggregateListings(minPrice, maxPrice, startDate, endDate) {
    try {
        const result = await listingCollection.aggregate([
            {
                // Match documents that fall within the specified price range
                $match: {
                    price: {
                        $gte: minPrice, // Minimum price
                        $lte: maxPrice  // Maximum price
                    },
                    // Check if the listing is available during the specified date range
                    $expr: {
                        $and: [
                            { $gt: ["$end", new Date(startDate)] }, // End date of listing should be after the start date of the desired range
                            { $lt: ["$start", new Date(endDate)] }  // Start date of listing should be before the end date of the desired range
                        ]
                    }
                }
            }
        ]).toArray();

        return result; // Return the filtered listings
    } catch (err) {
        console.error("Error aggregating listings:", err);
        throw err;
    }
}

async function aggregateListings(address, radius, minPrice, maxPrice) {
    try {
        // Geocode the address to get latitude and longitude
        const { lat, long } = await geocodeAddress(address);

        // Convert the radius from miles to meters
        const radiusInMeters = radius * 1609.34;

        const result = await listingCollection.aggregate([
            {
                // Match documents based on price range
                $match: {
                    price: {
                        $gte: minPrice, // Minimum price
                        $lte: maxPrice  // Maximum price
                    }
                }
            },
            {
                // Filter by proximity using geospatial query
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: [long, lat] // Geocoded longitude and latitude
                    },
                    distanceField: "distance", // Field to store the calculated distance
                    maxDistance: radiusInMeters, // Maximum distance in meters
                    spherical: true, // Use spherical distance calculations
                    query: {
                        price: {
                            $gte: minPrice,
                            $lte: maxPrice
                        }
                    }
                }
            }
        ]).toArray();

        return result; // Return the filtered listings
    } catch (err) {
        console.error("Error aggregating listings:", err);
        throw err;
    }
}

async function aggregateListings(address, radius, startDate, endDate) {
    try {
        // Geocode the address to get latitude and longitude
        const { lat, long } = await geocodeAddress(address);

        // Convert the radius from miles to meters
        const radiusInMeters = radius * 1609.34;

        const result = await listingCollection.aggregate([
            {
                // Match documents that are available within the specified date range
                $match: {
                    $expr: {
                        $and: [
                            { $gt: ["$end", new Date(startDate)] }, // End date of listing should be after the start date of the desired range
                            { $lt: ["$start", new Date(endDate)] }  // Start date of listing should be before the end date of the desired range
                        ]
                    }
                }
            },
            {
                // Filter by proximity using geospatial query
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: [long, lat] // Geocoded longitude and latitude
                    },
                    distanceField: "distance", // Field to store the calculated distance
                    maxDistance: radiusInMeters, // Maximum distance in meters
                    spherical: true // Use spherical distance calculations
                }
            }
        ]).toArray();

        return result; // Return the filtered listings
    } catch (err) {
        console.error("Error aggregating listings:", err);
        throw err;
    }
}


async function aggregateListings(address, radius, minPrice, maxPrice, startDate, endDate) {
    try {
        // Geocode the address to get latitude and longitude
        const { lat, long } = await geocodeAddress(address);

        // Convert the radius from miles to meters
        const radiusInMeters = radius * 1609.34;

        const result = await listingCollection.aggregate([
            {
                // Match documents based on price range and availability during the specified date range
                $match: {
                    price: {
                        $gte: minPrice, // Minimum price
                        $lte: maxPrice  // Maximum price
                    },
                    $expr: {
                        $and: [
                            { $gt: ["$end", new Date(startDate)] }, // End date of listing should be after the start date of the desired range
                            { $lt: ["$start", new Date(endDate)] }  // Start date of listing should be before the end date of the desired range
                        ]
                    }
                }
            },
            {
                // Filter by proximity using geospatial query
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: [long, lat] // Geocoded longitude and latitude
                    },
                    distanceField: "distance", // Field to store the calculated distance
                    maxDistance: radiusInMeters, // Maximum distance in meters
                    spherical: true // Use spherical distance calculations
                }
            }
        ]).toArray();

        return result; // Return the filtered listings
    } catch (err) {
        console.error("Error aggregating listings:", err);
        throw err;
    }
}



// posted for rent
/*
{
    "_id": "unique_document_id",  // Automatically generated by MongoDB or your custom ID
    "parentUsername": "parentUser123",  // The ID or username of the parent user
    "position": {                        // Position data as a GeoJSON Point
        "type": "Point",
        "coordinates": [longitude, latitude]  // [longitude, latitude]
    },
    "start": "2024-10-12T14:00:00Z", // ISO 8601 formatted date for check-in
    "end": "2024-10-15T11:00:00Z", // ISO 8601 formatted date for check-out
    "price": 300.00                      // Price associated with the stay
    "description": "string"
}
*/

// currently being rented
/*
{
    "_id": "unique_document_id",  // Automatically generated by MongoDB or your custom ID
    "parentUsername": "parentUser123",  // The ID or username of the parent user
    "childUsername": "childUser456",    // The ID or username of the child user
    "position": {                        // Position data as a GeoJSON Point
        "type": "Point",
        "coordinates": [longitude, latitude]  // [longitude, latitude]
    },
    "checkInTime": "2024-10-12T14:00:00Z", // ISO 8601 formatted date for check-in
    "checkOutTime": "2024-10-15T11:00:00Z", // ISO 8601 formatted date for check-out
    "price": 300.00                      // Price associated with the stay
}
*/