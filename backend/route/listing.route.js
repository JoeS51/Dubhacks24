import express from 'express'
import Listing from '../model/listing.model.js';

const router = express.Router();

router.get('/get', async (req, res) => {
    res.send("Hello");
})

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