import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  parentUsername: {
    type: String,
    required: false,
    default: "foo" // Default value for parentUsername
  },
  position: {
    type: {
      type: String, 
      enum: ['Point'], 
      required: false,
      default: 'Point' // Default value for position.type
    },
    coordinates: {
      type: [Number], // Array of numbers representing longitude and latitude
      required: false,
      default: [0, 0] // Default coordinates
    }
  },
  address: {
    city: {
      type: String,
      required: false,
      default: "Unknown City" // Default value for city
    },
    state: {
      type: String,
      required: false,
      default: "Unknown State" // Default value for state
    },
    zipcode: {
      type: String,
      required: false,
      default: "00000" // Default value for zipcode
    },
    street: {
      type: String,
      required: false,
      default: "Unknown Street" // Default value for street
    }
  },
  start: {
    type: Date, // Use Date type for timestamps
    required: false,
    default: Date.now // Default to current date/time
  },
  end: {
    type: Date, // Use Date type for timestamps
    required: false,
    default: Date.now // Default to current date/time
  },
  price: {
    type: Number, // Use Number type for price
    required: false,
    default: 0 // Default price
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
    required: false,
    default: "Untitled" // Default value for title
  },
  occupied: {
    type: Boolean,
    required: false,
    default: false // Default to not occupied
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
