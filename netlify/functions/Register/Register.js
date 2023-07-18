exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const handler = async (event) => {
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

    const { username, email, password } = JSON.parse(event.body);

    // Check if a user with the same email already exists
    const database = mongoClient.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      // User with the same email already exists
      // You can perform additional steps here if needed, such as comparing passwords
      const isPasswordValid = existingUser.password === password;

      if (!isPasswordValid) {
        // Password is invalid
        return {
          statusCode: 401,
          body: JSON.stringify({ error: 'Invalid password' }),
        };
      }

      // Authentication successful
      // You can perform any additional actions required for authenticated users here
      // For example, generate a token for session management or return user data
      const currentUserId = existingUser._id;
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Authentication successful', user: existingUser }),
      };
    }

    // Create a new user and save it to the database
    const newUser = {
      username,
      email,
      password,
    };

    const savedUser = await collection.insertOne(newUser);
    const currentUserId = savedUser.insertedId;
    console.log('User saved:', savedUser);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User registered successfully', user: savedUser }),
    };
  } catch (error) {
    console.error('Error registering user:', error);
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

//module.exports = handler;
