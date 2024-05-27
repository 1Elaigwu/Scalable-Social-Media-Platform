const { Client } = require('pg');

const connectionString = 'postgresql://postgres:postgres@localhost:5432/social_media_platform';

async function connectWithRetry() {
    const maxRetryCount = 5;
    let retryCount = 0;
    let connected = false;

    while (!connected && retryCount < maxRetryCount) {
        try {
            const client = new Client({ connectionString });
            await client.connect();
            console.log('Connected to PostgreSQL database!');
            connected = true;
            return client;
        } catch (error) {
            console.error(`Error connecting to database: ${error.message}`);
            retryCount++;
            const waitTime = Math.pow(2, retryCount) * 1000; // Exponential backoff
            console.log(`Retrying in ${waitTime / 1000} seconds...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
        }
    }

    if (!connected) {
        console.error('Failed to connect to database after maximum retry attempts.');
        process.exit(1); // Graceful shutdown
    }
}

async function main() {
    const client = await connectWithRetry();
    // Use the connected client for database operations
}

main();
