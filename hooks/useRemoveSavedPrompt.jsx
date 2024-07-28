import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";

const useRemoveSavedPrompt = () => {
	const { data: session } = useSession();
	const { toast } = useToast();

	const removeSavedPrompt = async (promptId) => {
		if (promptId === "") {
			return;
		}
		if (!session?.user) {
			toast({
				title: "Unauthenticated..! 🔑",
				description: "Please Sing-In to save this Prompt.",
			});
			return;
		}
		try {
			const response = await fetch(
				`api/prompts/manage/${session.user.id}/${promptId}`,
				{
					method: "DELETE",
				}
			);
			if (response.status === 404) {
				toast({
					title: "Prompt not Found..! ✅",
					description: "Prompt does not exist in saved Prompts.",
				});
			}

			if (response.ok) {
				toast({
					title: "Removed..! ✅",
					description: "Prompt removed Successfully.",
				});
			}
		} catch (e) {
			toast({
				title: "Error..! ⚠️",
				description: "Something went wrong, Please try again.",
			});
		}
	};

	return { removeSavedPrompt };
};

export default useRemoveSavedPrompt;
