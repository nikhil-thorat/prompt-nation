import Prompt from "@/models/Prompt";
import User from "@/models/User";
import { connectDb } from "@/utils/connectDb";

export const GET = async (req, { params }, res) => {
	try {
		await connectDb();

		const user = await User.findById(params.userId).populate({
			path: "savedPrompts",
			model: "Prompt",
			populate: {
				path: "creator",
				model: "User",
			},
		});
		const userPrompts = await Prompt.find({ creator: params.userId }).populate(
			"creator"
		);

		return new Response(JSON.stringify({ user, userPrompts }), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response("Failed to fetch user's Prompts..!", { status: 500 });
	}
};
