import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "" });

export const POST = async (req, res) => {
	const { prompt } = await req.json();

	try {
		const completion = await openai.chat.completions.create({
			messages: [{ role: "user", content: prompt }],
			model: "gpt-3.5-turbo",
			response_format: { type: "text" },
		});

		const response = completion.choices[0].message.content;

		return new Response(JSON.stringify(response), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response("Failed to fetch user's Prompts..!", { status: 500 });
	}
};
