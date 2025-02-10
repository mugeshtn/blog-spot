import mongoose from "mongoose";

const uri = process.env.MONGO_URI
if(!uri){
    throw new Error("MongoDB connection URI is missing")
}

type MongoCache = {
    conn: mongoose.Connection | null, //connection object
    promise: Promise<mongoose.Connection> | null
}

declare global{
    var mongooseCache : MongoCache | undefined;
}

let cached: MongoCache = global.mongooseCache  || { conn: null, promise: null };

const connectMongo = async (): Promise<void> =>{
    
    if (cached.conn) return;

    if(!cached.promise){
       cached.promise = mongoose.connect(uri)
        .then((mongoose) => {
            console.log("MongoDB Connected!")
            return mongoose.connection;
        })
        .catch((err) => {
            console.error("MongoDB connection Error: ", err)
            throw err;
        });
    }

    cached.conn = await cached.promise
    global.mongooseCache  = cached;
}

export default connectMongo;