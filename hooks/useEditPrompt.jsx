import { useToast } from "@/components/ui/use-toast";

const useEditPrompt = () => {
	const { toast } = useToast();
	const editPrompt = async (prompt) => {
		try {
			const response = await fetch(`/api/prompts/${prompt._id}`, {
				method: "POST",
				body: JSON.stringify({ prompt: prompt.prompt, tag: prompt.tag }),
			});

			if (response.ok) {
				toast({
					title: "Edited..! ✅",
					description: "Prompt Edited Successfully.",
				});
			}
			if (response.status === 404) {
				toast({
					title: "Prompt does not Exist..! ✅",
					description: "Invalid Prompt or Prompt does not Exist.",
				});
			}
		} catch (error) {
			toast({
				title: "Error..! ⚠️",
				description: "Something went wrong, Please try again.",
			});
		}
	};

	return { editPrompt };
};

export default useEditPrompt;
