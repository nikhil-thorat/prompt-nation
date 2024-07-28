"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import useChatBot from "@/hooks/useChatBot";
import { copyPrompt } from "@/utils/copyPrompt";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Chat = () => {
	const user = useSession();
	const {
		chatBotResponse,
		loading,
		botResponse,
		userPrompt,
		prompt,
		setPrompt,
	} = useChatBot();

	const createChatBotResponse = async () => {
		await chatBotResponse();
		setPrompt("");
	};

	const { toast } = useToast();

	const handleCopyPrompt = (prompt) => {
		try {
			copyPrompt(prompt);
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
	const router = useRouter();

	useEffect(() => {
		if (!user.data?.user) {
			router.push("/");
		}
	});

	return (
		<section className="w-full max-h-screen min-h-[75dvh] flex flex-col items-center justify-center border border-border rounded-md my-2 mb-8 p-4">
			<main className="w-full flex flex-col h-[75dvh] relative">
				{userPrompt == "" ? (
					<div className="flex flex-col gap-4 items-center justify-center h-full w-full">
						<span className="w-20 h-20 bg-primary text-background rounded-3xl flex items-center justify-center text-5xl font-bold">
							{">P"}
						</span>
						<h1 className="text-4xl font-bold">How can I help you Today?</h1>
						<p className="w-1/3 text-center text-balance text-muted-foreground">
							You can test your prompts here, or can generate your own using
							this chat bot
						</p>
					</div>
				) : (
					<div className="flex-1 flex flex-col scroll-smooth gap-4 overflow-y-scroll pb-12">
						<div className="flex flex-col gap-4 items-start group">
							<div>
								<div className="flex items-center gap-4">
									<Avatar className="w-10 h-10">
										<AvatarImage
											src={user?.data.user.image}
											alt={user?.data.user.name}
										/>
									</Avatar>
									<h1 className="text-2xl font-bold">You</h1>
								</div>
								<p className="ml-16 text-xl font-light">{userPrompt}</p>
							</div>
							<div className="flex w-full">
								<div className="flex-1 w-full">
									<div className="flex items-center gap-4">
										<span className="w-10 h-10 bg-primary text-background rounded-md flex items-center justify-center text-xl font-bold">
											{">P"}
										</span>
										<h1 className="text-2xl font-bold">PromptnationBot</h1>
									</div>
									<div className="w-full flex flex-col items-start gap-2">
										{loading ? (
											<>
												<span className="w-[90%] h-6 mt-2 bg-border ml-16 rounded-md animate-pulse duration-[1000ms] delay-0" />
												<span className="w-[90%] h-6 mt-2 bg-border ml-16 rounded-md animate-pulse duration-[1500ms] delay-500" />
												<span className="w-[70%] h-6 mt-2 bg-border ml-16 rounded-md animate-pulse duration-[1250ms] delay-200" />
											</>
										) : (
											<p
												className="
											 ml-16 text-xl font-light text-balance w-[90%]"
											>
												{botResponse}
											</p>
										)}
									</div>
								</div>

								<Button
									variant="outline"
									size="icon"
									onClick={() => handleCopyPrompt(botResponse)}
									className="flex opacity-0 group-hover:opacity-100 items-center justify-center transition-opacity"
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
							</div>
						</div>
					</div>
				)}

				<div className="absolute bottom-0 w-full flex gap-2 items-center justify-center">
					<Input
						required
						type="text"
						id="tag"
						name="tag"
						placeholder="Enter your Prompt here..!"
						className="max-h-64 outline-none"
						onChange={(e) => setPrompt(e.target.value)}
						value={prompt}
					/>
					<Button onClick={() => createChatBotResponse(prompt)}>Send</Button>
				</div>
			</main>
		</section>
	);
};

export default Chat;
