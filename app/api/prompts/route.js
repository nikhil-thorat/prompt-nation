import Prompt from "@/models/Prompt";
import { connectDb } from "@/utils/connectDb";

export const GET = async (req, res) => {
	try {
		await connectDb();

		const prompts = await Prompt.find({})
			.populate("creator")
			.sort({ createdAt: -1 });

		return new Response(JSON.stringify(prompts), { status: 200 });
	} catch (error) {
		return new Response("Failed to Fetch Prompts..!", { status: 500 });
	}
};
