const { MongoClient } = require('mongodb');
require('dotenv').config();

let cachedClient = null;

async function connectToDatabase() {
    if (cachedClient) return cachedClient;
    const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    cachedClient = client;
    return client;
}

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);
        const { name, email, message } = data;

        const client = await connectToDatabase();
        const db = client.db('portfolio');
        const collection = db.collection('formsubmissions');

        await collection.insertOne({ name, email, message, submittedAt: new Date() });

        return {
            statusCode: 201,
            body: JSON.stringify({ message: 'Form submitted successfully!' }),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error', details: error.toString() }),
        };
    }
};