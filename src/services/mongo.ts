import { MongoClient, ObjectId } from "mongodb";

export async function getConnectDatabase() {
    const dbConnection: any = process.env.DB_CONNECTION;
    if (!dbConnection) {
        throw new Error("Database connection string is not defined in environment variables");
    }
    return await MongoClient.connect(dbConnection);
}

export async function insertDocument(client: any, collection: string, document: object) {
    const db = client.db('db01');
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocuments(client: any, collection: string) {
    const db = client.db('db01');
    const documents = await db.collection(collection).find().toArray();
    return documents;
}
