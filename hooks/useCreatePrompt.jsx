const { useToast } = require("@/components/ui/use-toast");
const { useSession } = require("next-auth/react");

const useCreatePrompt = () => {
	const { data: session } = useSession();

	const { toast } = useToast();

	const createPrompt = async (prompt) => {
		if (!session?.user) {
			toast({
				title: "Unauthenticated..! 🔑",
				description: "Please Sing-In to create a Prompt.",
			});
			return;
		}

		try {
			const response = await fetch("api/prompts/new", {
				method: "POST",
				body: JSON.stringify({
					userId: session?.user.id,
					prompt: prompt.prompt,
					tag: prompt.tag,
				}),
			});

			if (response.ok) {
				toast({
					title: "Success..! ✅",
					description: "Prompt was successfully created.",
				});
			}
		} catch (error) {
			toast({
				title: "Error..! ⚠️",
				description: "Something went wrong, Please try again.",
			});
		}
	};

	return { createPrompt };
};

export default useCreatePrompt;
