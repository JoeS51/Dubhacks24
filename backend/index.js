const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://sheepca03:DQQVtnIZ8a7exjWT@cluster0.j6o91.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


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