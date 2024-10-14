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
    required: false
  },
  occupied: {
    type: Boolean,
    required: false
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




// import mongoose from 'mongoose';

// const listingSchema = new mongoose.Schema({
//   parentUsername: {
//     type: String,
//     required: false,
//     default: "Anonymous" // Default username
//   },
//   position: {
//     type: {
//       type: String,
//       enum: ['Point'],
//       required: false,
//       default: 'Point' // Default geometry type
//     },
//     coordinates: {
//       type: [Number], // Longitude and Latitude
//       required: false,
//       default: [0, 0] // Default coordinates (longitude, latitude)
//     }
//   },
//   address: {
//     city: {
//       type: String,
//       required: false,
//       default: "Unknown City"
//     },
//     state: {
//       type: String,
//       required: false,
//       default: "Unknown State"
//     },
//     zipcode: {
//       type: String,
//       required: false,
//       default: "00000"
//     },
//     street: {
//       type: String,
//       required: false,
//       default: "Unknown Street"
//     }
//   },
//   start: {
//     type: Date,
//     required: false,
//     default: () => new Date() // Default to current date/time
//   },
//   end: {
//     type: Date,
//     required: false,
//     default: () => new Date(Date.now() + 24 * 60 * 60 * 1000) // Default to 24 hours later
//   },
//   price: {
//     type: Number,
//     required: false,
//     default: 0 // Default price
//   },
//   rating: {
//     type: Number,
//     required: false,
//     default: 0 // Default rating
//   },
//   numRatings: {
//     type: Number,
//     required: false,
//     default: 0 // Default number of ratings
//   },
//   title: {
//     type: String,
//     required: false,
//     default: "Untitled Listing" // Default title
//   },
//   occupied: {
//     type: Boolean,
//     required: false,
//     default: false // Default to not occupied
//   },
//   type: {
//     type: String,
//     enum: ['Gated', 'Apartment', 'Garage', 'Driveway', 'Curbside'],
//     required: false,
//     default: 'Gated' // Default type
//   },
//   size: {
//     type: String,
//     enum: ['SUV', 'Sedan', 'Minivan', 'Compact', 'Truck'],
//     required: false,
//     default: 'SUV' // Default size
//   },
//   description: {
//     type: String,
//     required: false,
//     default: "No description provided" // Default description
//   }
// }, { _id: true });

// // Ensure the position field is indexed for geospatial queries
// listingSchema.index({ position: '2dsphere' });

// const Listing = mongoose.model('Listing', listingSchema);

// export default Listing;