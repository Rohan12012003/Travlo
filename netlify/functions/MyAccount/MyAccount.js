const { MongoClient, ServerApiVersion } = require('mongodb');
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

    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Not Found' }),
      };
    }

    const { userId } = JSON.parse(event.body);
    console.log(userId);

    // Check if a user with the same email already exists
    const database = mongoClient.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    const objectIdUserId = new ObjectId(userId);

    const user = await collection.findOne({ _id: objectIdUserId });

    console.log(user);

    if (!user) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'User not found' }),
      };
    }

    console.log("found user");
    console.log(user);

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
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
