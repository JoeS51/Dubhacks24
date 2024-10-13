import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  parentUsername: {
    type: String,
    required: true

  },
  position: {
    type: {
      type: String, 
      enum: ['Point'], 
      required: true
    },
    coordinates: {
      type: [Number], // Array of numbers representing longitude and latitude
      required: true
    }
  },
  address: {
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipcode: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    }
  },
  start: {
    type: Date, // Use Date type for timestamps
    required: true
  },
  end: {
    type: Date, // Use Date type for timestamps
    required: true
  },
  price: {
    type: Number, // Use Number type for price
    required: true
  },
  rating: {
    type: Number, // Use Number type for price
    required: false,
    default: 0 // Default rating
  },
  numRatings: {
    type: Number, // Use Number type for price
    required: false,
    default: 0 // Default number of ratings
  },
  title: {
    type: String, // Use Number type for price
    required: true
  },
  occupied: {
    type: Boolean,
    required: true
  },
  type: {
    type: String,
    enum: ['Gated', 'Apartment', 'Garage', 'Driveway', 'Curbside'],
    required: false,
    default: "Gated" // Default value for type
  },
  size: {
    type: String,
    enum: ['SUV', 'Sedan', 'Minivan', 'Compact', 'Truck'],
    required: false,
    default: "SUV" // Default value for size
  },
  description: {
    type: String,
    required: false,
    default: "No description provided" // Default value for description
  }
}, { _id: true }); // MongoDB generates _id automatically, but you can define it explicitly

// Ensure the position field is indexed for geospatial queries
listingSchema.index({ position: '2dsphere' });

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
