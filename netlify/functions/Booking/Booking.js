const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

exports.handler = async function (event, context) {
  // MongoDB connection setup
  console.log('Trying to connect');
  const mongoClient = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    console.log('Not connected to the database');
    await mongoClient.connect();
    console.log('Connected to the database');

    if (event.httpMethod !== 'PUT') { // Change the HTTP method to PUT
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Not Found' }),
      };
    }

    const { userId, bookingData } = JSON.parse(event.body); // Assuming the wishlist item is sent in the request body

    // Check if a user with the given ID exists
    const database = mongoClient.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    const objectIdUserId = new ObjectId(userId);

    const user = await collection.findOne({ _id: objectIdUserId });

    if (!user) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'User not found' }),
      };
    }

    // Use $push to append the new item to the wishlist array
    await collection.updateOne(
      { _id: objectIdUserId },
      { $push: { bookings: bookingData } }
    );

    console.log('Booking item added:', bookingData);

    // Get the updated user data
    const updatedUser = await collection.findOne({ _id: objectIdUserId });
    const updatedBooking = updatedUser.bookings; // Extract the updated wishlist array from the user object

    return {
      statusCode: 200,
      body: JSON.stringify(updatedBooking), // Return the updated wishlist
    };
  } catch (error) {
    console.error('Error updating bookings:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  } finally {
    // Close the MongoDB connection after the handler finishes
    await mongoClient.close();
    console.log('MongoDB connection closed.');
  }
};
