"use client";

import Form from "@/components/Form";
import useEditPrompt from "@/hooks/useEditPrompt";
import usePromptDetails from "@/hooks/usePromptDetails";
import Image from "next/image";
import { useParams } from "next/navigation";

const Edit = () => {
	const { promptId } = useParams();

	const { prompt, setPrompt } = usePromptDetails({ promptId });
	const { editPrompt } = useEditPrompt();

	return (
		<section className="w-full min-h-screen flex items-center">
			<main className="flex md:flex-row flex-col-reverse items-center justify-between w-full p-4 md:p-0 gap-8 md:gap-0">
				<Form
					title="Edit"
					handleForm={() => editPrompt(prompt)}
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

export default Edit;
