import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		console.log("Connected to MongoDb");
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			dbName: process.env.MONGODB_NAME,
		});

		isConnected = true;

		console.log("Connected to MongoDb");
	} catch (error) {
		console.log(error);
	}
};
