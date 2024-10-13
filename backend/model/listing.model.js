import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  parentUsername: {
    type: String,
    required: false
  },
  position: {
    type: {
      type: String, 
      enum: ['Point'], 
      required: false
    },
    coordinates: {
      type: [Number], // Array of numbers representing longitude and latitude
      required: false
    }
  },
  address: {
    city: {
      type: String,
      required: false
    },
    state: {
      type: String,
      required: false
    },
    zipcode: {
      type: String,
      required: false
    },
    street: {
      type: String,
      required: false
    }
  },
  start: {
    type: Date, // Use Date type for timestamps
    required: false
  },
  end: {
    type: Date, // Use Date type for timestamps
    required: false
  },
  price: {
    type: Number, // Use Number type for price
    required: false
  },
  rating: {
    type: Number, // Use Number type for price
    required: false
  },
  numRatings: {
    type: Number, // Use Number type for price
    required: false
  },
  title: {
    type: String, // Use Number type for price
    required: false
  },
  occupied: {
    type: Boolean,
    required: false
  },
  type: {
    type: String,
    enum: ['Gated', 'Apartment', 'Garage', 'Driveway', 'Curbside'],
    required: false
  },
  size: {
    type: String,
    enum: ['SUV', 'Sedan', 'Minivan', 'Compact', 'Truck'],
    required: false
  },
  description: {
    type: String,
    required: false
  }
}, { _id: true }); // MongoDB generates _id automatically, but you can define it explicitly

// Ensure the position field is indexed for geospatial queries
listingSchema.index({ position: '2dsphere' });

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
