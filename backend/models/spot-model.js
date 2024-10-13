const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: {
        type: {
            type: String, // 'Point'
            enum: ['Point'], // 'Point' is the only allowed type
            required: true,
        },
        coordinates: { type: [Number], required: true }, // [longitude, latitude]
    },
    images: [{ type: String }], // Array of image URLs
    amenities: [{ type: String }], // Array of amenities
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the user model
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Create a geospatial index for location
roomSchema.index({ location: '2dsphere' });

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
