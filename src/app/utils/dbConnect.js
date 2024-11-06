import mongoose from "mongoose";

const uri = process.env.MONGODB_URI

if (!uri) {
    throw new Error('define correct URI')
}

async function dbConnect() {
    await mongoose.connect(uri).then(() => console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}

export default dbConnect;