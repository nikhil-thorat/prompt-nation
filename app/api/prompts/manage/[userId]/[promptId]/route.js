import Prompt from "@/models/Prompt";
import User from "@/models/User";
import { connectDb } from "@/utils/connectDb";

export const POST = async (req, { params }, res) => {
	const userId = params.userId;
	const promptId = params.promptId;

	try {
		await connectDb();

		const user = await User.findById(userId);
		const prompt = await Prompt.findById(promptId);

		if (!user && !prompt) {
			return new Response("User or Prompt not Found..!", { status: 404 });
		}
		if (!user.savedPrompts.includes(promptId)) {
			await user.savedPrompts.push(promptId);
			await user.save();
			return new Response("Prompt saved Successfully..!", { status: 200 });
		}

		return new Response("Prompt already Saved..!", { status: 403 });
	} catch (error) {
		console.log(error.message);
		return new Response("Something went wrong..!", { status: 500 });
	}
};

export const DELETE = async (req, { params }, res) => {
	const userId = params.userId;
	const promptId = params.promptId;

	try {
		await connectDb();

		const user = await User.findById(userId);

		if (!user) {
			return new Response("User or Prompt not Found..!", { status: 404 });
		}
		if (user.savedPrompts.includes(promptId)) {
			await user.savedPrompts.splice(promptId, 1);
			await user.save();
			return new Response("Prompt deleted Successfully..!", { status: 200 });
		}

		return new Response("Prompt not Found in saved Prompts..!", {
			status: 404,
		});
	} catch (error) {
		console.log(error.message);
		return new Response("Something went wrong..!", { status: 500 });
	}
};
