import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
	{
		email: {
			type: String,
			unique: [true, "User with that email already exists..!"],
			required: [true, "Email is required,,!"],
		},
		username: {
			type: String,
			unique: [true, "User with that username already exists..!"],
			required: [true, "Username is required,,!"],
		},
		image: {
			type: String,
		},
		savedPrompts: {
			type: [Schema.Types.ObjectId],
			ref: "Prompt",
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
