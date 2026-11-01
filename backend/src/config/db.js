import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  // Support both env names: MONGODB_URI (expected) or MONGO_URI (legacy/sample)
  const baseUri = process.env.MONGODB_URI || process.env.MONGO_URI;
  const uri = baseUri ? `${baseUri.replace(/\/+$/, "")}/${DB_NAME}` : null;

  if (!uri) {
    console.warn(
      "No MongoDB URI provided (MONGODB_URI or MONGO_URI). Skipping DB connection."
    );
    return;
  }

  try {
    const connectionInstance = await mongoose.connect(uri);
    isConnected = true;
    console.log(
      `\nMongoDB connected ! DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error: ", error);
    console.warn("Continuing without DB connection. Some features may not work.");
    // Do not exit process; allow server to start for local development
  }
};

export { connectDB };
