const { MongoClient } = require('mongodb');
const FormSubmission = require('../../models/formSubmission');
require('dotenv').config();

let cachedClient = null;

async function connectToDatabase() {
    if (cachedClient) return cachedClient;

    const client = new MongoClient(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    await client.connect();
    cachedClient = client;
    return client;
}

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method not allowed' }),
        };
    }

    try {
        const data = JSON.parse(event.body);
        const { name, email, message } = data;

        // Connect to MongoDB
        const client = await connectToDatabase();
        const db = client.db('process.env.MONGO_URI'); 
        const collection = db.collection('formsubmissions');

        await collection.insertOne({ name, email, message, submittedAt: new Date() });

        return {
            statusCode: 201,
            body: JSON.stringify({ message: 'Form submitted successfully!' }),
        };
    } catch (error) {
        console.error('Error submitting form:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error submitting form', error: error.toString() }),
        };
    }
};