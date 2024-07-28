"use client";

import Form from "@/components/Form";
import useCreatePrompt from "@/hooks/useCreatePrompt";
import Image from "next/image";
import { useState } from "react";

const Write = () => {
	const { createPrompt } = useCreatePrompt();

	const [prompt, setPrompt] = useState({
		prompt: "",
		tag: "",
	});

	return (
		<section className="w-full min-h-screen flex items-center">
			<main className="flex md:flex-row flex-col-reverse items-center justify-between w-full p-4 md:p-0 gap-8 md:gap-0">
				<Form
					title="Create"
					handleForm={createPrompt}
					prompt={prompt}
					setPrompt={setPrompt}
				/>
				<Image
					src={"/Form.svg"}
					alt="Hero-Image"
					width={600}
					height={600}
					className="flex-1 scale-150 dark:invert"
				/>
			</main>
		</section>
	);
};

export default Write;
