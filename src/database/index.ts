const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = 'mongodb+srv://joao656217:1234@cluster0.tezi9s6.mongodb.net/?retryWrites=true&w=majority'
// Connect to your Atlas cluster
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (error) {
        console.error('deu erro');
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);