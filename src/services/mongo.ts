import { MongoClient, ObjectId } from "mongodb";


let client: MongoClient;
let clientPromise: Promise<MongoClient>;16

export async function connectDatabase() {
    if (!clientPromise) {
        const dbConnectionString = process.env.DB_CONNECTION;
        if (!dbConnectionString) 
            throw new Error('Database connection string is not defined');
        client = new MongoClient(dbConnectionString);
        clientPromise = client.connect();
    }
    
    const connectedClient = await clientPromise;
    return connectedClient;
}

export async function insertDocument(collection: string, document: object) {
    const client = await connectDatabase();
    const db = client.db('db01');
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocuments( collection: string) {
    const client = await connectDatabase();
    const db = client.db('db01');
    const documents = await db.collection(collection).find().toArray();
    return documents;
}

export async function deleteDocument(collection: string, id: number){
    const client = await connectDatabase();
    const db = client.db('db01');
    const result = await db.collection(collection).deleteOne({_id: new ObjectId(id)});
    return result.deletedCount > 0;
}

export async function updateDocument(collection: string, id: number, updatedDocument: object) {
    const client = await connectDatabase();
    const db = client.db('db01');
    const result = await db.collection(collection).updateOne({_id: new ObjectId(id)}, {$set: updatedDocument});
    return result.matchedCount > 0;
}
