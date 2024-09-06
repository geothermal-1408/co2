import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection failed", error);
    throw new Error("Database connection failed");
  }
};

export default connectDb;