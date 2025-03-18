import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function dbConnect(): Promise<any | string> {
    const mongoServer = await MongoMemoryServer.create();
    const MONGOIO_URI = mongoServer.getUri();
    await mongoose.disconnect();
    await mongoose.connect(MONGOIO_URI, {
        dbName: "Weather"
    });
}

export default dbConnect;