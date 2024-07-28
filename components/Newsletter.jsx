"use client";

import Image from "next/image";

import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
	const { toast } = useToast();

	const [email, setEmail] = useState("");

	const subscribeToNewsletter = () => {
		if (!email.includes("@") || email === "") {
			toast({
				title: "Invalid Email..! ⚠️",
				description: "Please enter valid Email address",
			});
		} else {
			toast({
				title: "Welcome..! 🎉",
				description: "Thanks for subscribing to Promptnation Newsletter.",
			});
		}
		setEmail("");
	};

	return (
		<section
			id="newsletter"
			className="w-full bg-primary h-dvh flex flex-col-reverse lg:flex-row-reverse md:gap-4 items-center justify-between p-4 lg:p-12 rounded-2xl relative overflow-clip"
		>
			<main className="flex-1 flex flex-col gap-4 md:gap-12 z-10">
				<div className="flex flex-col gap-4 items-start justify-center">
					<h1 className="text-primary-foreground text-5xl text-start md:text-8xl font-bold">
						{">Newsletter!"}
					</h1>
					<p className="text-muted text-base md:text-2xl w-full md:w-4/5 text-start text-pretty font-light">
						Join Promptnation Newsletter to receive Daily exciting AI Prompts
						and AI News
					</p>
				</div>
				<div className="flex flex-col w-full items-start gap-2">
					<Label htmlFor="email" className="text-primary-foreground">
						Email
					</Label>
					<div className="flex md:w-3/5 w-full items-center gap-2">
						<Input
							type="email"
							placeholder="example@xyz.com"
							id="email"
							className="w-full"
							required={true}
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<Button
							type="submit"
							variant="outline"
							size="icon"
							className="p-2"
							onClick={() => subscribeToNewsletter()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
								/>
							</svg>
						</Button>
					</div>
				</div>
			</main>
			<div className="flex-1 flex justify-end">
				<Image
					src={"/Newsletter.svg"}
					alt="Hero-Image"
					width={600}
					height={600}
					className="scale-150 invert dark:invert-0"
				/>
			</div>
		</section>
	);
};

export default Newsletter;
