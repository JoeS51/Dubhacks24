import express from 'express'
import Listing from '../model/listing.model.js';

const router = express.Router();

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
      const { parentUsername, position, address, start, end, price, description } = req.body;
  
      // Create a new listing
      const newListing = new Listing({
        parentUsername,
        position,
        address,
        start,
        end,
        price,
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

export default router;