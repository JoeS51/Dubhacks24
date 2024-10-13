const express = require('express');
const Listing = require('./models/Listing'); // Import your Mongoose model

const router = express.Router(); // Create a router instance

// POST /api/listings - Create a new listing
router.post('/api/listings', async (req, res) => {
  try {
    const listingData = req.body;
    const newListing = new Listing(listingData); // Create new document
    await newListing.save(); // Save to MongoDB
    res.status(201).json({ message: 'Listing created successfully!' });
  } catch (error) {
    console.error('Error creating listing:', error);
    res.status(500).json({ message: 'Failed to create listing' });
  }
});

// GET /api/listings - Retrieve all listings
router.get('/api/listings', async (req, res) => {
  try {
    const listings = await Listing.find(); // Fetch all documents
    res.status(200).json(listings); // Send back as JSON
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ message: 'Failed to retrieve listings' });
  }
});

// GET /api/listings/:id - Retrieve a single listing by ID
router.get('/api/listings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id); // Find document by ID
    if (listing) {
      res.status(200).json(listing);
    } else {
      res.status(404).json({ message: 'Listing not found' });
    }
  } catch (error) {
    console.error('Error fetching listing:', error);
    res.status(500).json({ message: 'Failed to retrieve listing' });
  }
});

// DELETE /api/listings/:id - Delete a listing by ID
router.delete('/api/listings/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id); // Delete by ID
    if (deletedListing) {
      res.status(200).json({ message: 'Listing deleted successfully!' });
    } else {
      res.status(404).json({ message: 'Listing not found' });
    }
  } catch (error) {
    console.error('Error deleting listing:', error);
    res.status(500).json({ message: 'Failed to delete listing' });
  }
});

// Export the router to use in your main server file
module.exports = router;
