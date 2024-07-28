import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Form = ({ title, handleForm, prompt, setPrompt }) => {
	const handleChange = (e) => {
		setPrompt({
			...prompt,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section className="flex flex-col gap-4 flex-1">
			<main className="flex flex-col gap-4">
				<h1 className="text-5xl md:text-6xl font-bold">{title} Prompt</h1>
				<p className="text-base md:text-xl font-light md:w-4/5 text-pretty text-muted-foreground">
					{title} and Share your Amazing Prompts with the World, and let your
					Imagination run wild with any AI-powered platform.
				</p>
			</main>
			<div className="flex flex-col gap-2 mt-6">
				<div className="grid w-full md:max-w-lg items-center gap-1.5">
					<Label htmlFor="prompt">Your Prompt</Label>
					<Textarea
						name="prompt"
						required
						type="text"
						id="prompt"
						placeholder="Write your Prompt here..."
						className="h-60 max-h-64 w-full"
						value={prompt?.prompt || ""}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="grid w-full md:max-w-lg items-center gap-1.5 mt-4">
					<Label htmlFor="tag" className="flex gap-2">
						Tag
						<span className="text-muted-foreground">
							(Add hashtag for your Prompt)
						</span>
					</Label>
					<Input
						required
						type="text"
						id="tag"
						name="tag"
						placeholder="#Tag"
						className="max-h-64"
						value={prompt?.tag || ""}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<Button className="md:max-w-lg mt-2" onClick={() => handleForm(prompt)}>
					{title}
				</Button>
			</div>
		</section>
	);
};

export default Form;
