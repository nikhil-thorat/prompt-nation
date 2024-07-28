import useRemoveSavedPrompt from "@/hooks/useRemoveSavedPrompt";
import useSavePrompt from "@/hooks/useSavePrompt";
import { copyPrompt } from "@/utils/copyPrompt";
import Link from "next/link";
import DeleteModal from "../DeleteModal";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { useToast } from "../ui/use-toast";

const PromptCard = ({ prompt, tab }) => {
	const { toast } = useToast();

	const { savePrompt } = useSavePrompt();
	const { removeSavedPrompt } = useRemoveSavedPrompt();

	const handleCopyPrompt = async (promptText) => {
		try {
			copyPrompt(promptText);
			toast({
				title: "Copied..! 📋",
				description: "Prompt copied to clipboard",
			});
		} catch (error) {
			toast({
				title: "Failed..! ⚠️",
				description: "Failed to copy Prompt to clipboard.",
			});
		}
	};

	return (
		<Card className="group">
			<CardHeader className="flex flex-row gap-4 items-center">
				<Avatar>
					<AvatarImage src={prompt.creator.image} />
				</Avatar>
				<span>
					<Link href={`/profile/${prompt.creator._id}`}>
						<CardTitle className="flex items-center gap-2 mb-1 hover:underline">
							<span>{prompt.creator.username}</span>
							{prompt.creator.isVerified ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-5 h-5 antialiased"
								>
									<path
										fillRule="evenodd"
										d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
										clipRule="evenodd"
									/>
								</svg>
							) : null}
						</CardTitle>
					</Link>
					<CardDescription>
						<span>{prompt.creator.email}</span>
					</CardDescription>
				</span>
			</CardHeader>
			<CardContent>
				<p>{prompt.prompt}</p>
				<p className="font-bold mt-2">#{prompt.tag}</p>
			</CardContent>
			<CardFooter className="mt-auto space-x-2 opacity-0  group-hover:opacity-100 transition-opacity">
				{tab === "savedPrompts" ? (
					<Button
						onClick={() => removeSavedPrompt(prompt._id)}
						variant="secondary"
						size="icon"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
							/>
						</svg>
					</Button>
				) : (
					<Button
						onClick={() => savePrompt(prompt._id)}
						variant="outline"
						size="icon"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
							/>
						</svg>
					</Button>
				)}
				<Button
					variant="outline"
					size="icon"
					onClick={() => handleCopyPrompt(prompt.prompt)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
						/>
					</svg>
				</Button>
				{tab === "myPrompts" ? (
					<div className="flex items-center gap-2">
						<Button size="icon" variant="outline" asChild>
							<Link href={`/edit/${prompt._id}`}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-5 h-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
									/>
								</svg>
							</Link>
						</Button>
						<DeleteModal promptId={prompt._id} />
					</div>
				) : null}
			</CardFooter>
		</Card>
	);
};

export default PromptCard;
