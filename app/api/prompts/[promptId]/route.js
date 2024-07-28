import Prompt from "@/models/Prompt";
import { connectDb } from "@/utils/connectDb";

export const GET = async (req, { params }, res) => {
	try {
		await connectDb();

		const prompt = await Prompt.findById(params.promptId);

		if (!prompt) {
			return new Response("Prompt not Found..!", { status: 404 });
		}

		return new Response(JSON.stringify(prompt), { status: 200 });
	} catch (error) {
		return new Response("Failed to fetch Prompt..!", { status: 500 });
	}
};

export const POST = async (req, { params }, res) => {
	const { prompt, tag } = await req.json();

	try {
		await connectDb();

		const existingPrompt = await Prompt.findById(params.promptId);

		if (!existingPrompt) {
			return new Response("Prompt not Found..!", { status: 404 });
		}

		existingPrompt.prompt = prompt;
		existingPrompt.tag = tag;

		await existingPrompt.save();

		return new Response(JSON.stringify(existingPrompt), { status: 200 });
	} catch (error) {
		return new Response("Failed to update Prompt..!", { status: 500 });
	}
};

export const DELETE = async (req, { params }, res) => {
	const { userId } = await req.json();

	try {
		await connectDb();

		const prompt = await Prompt.findById(params.promptId);

		if (!prompt) {
			return new Response("Prompt not Found..!", { status: 404 });
		}

		if (prompt.creatorId === userId) {
			await Prompt.findByIdAndDelete(params.promptId);
		} else {
			return new Response("Unauthorized, you cant perform this action..!", {
				status: 403,
			});
		}

		return new Response("Prompt deleted Successfully..!", { status: 200 });
	} catch (error) {
		return new Response("Failed to delete Prompt..!", { status: 500 });
	}
};
