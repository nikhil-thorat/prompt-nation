import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";

const useDeletePrompt = () => {
	const { data: session } = useSession();
	const { toast } = useToast();

	const deletePrompt = async (promptId) => {
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
			const response = await fetch(`api/prompts/${promptId}`, {
				method: "DELETE",
				body: JSON.stringify(session?.user.id),
			});
			if (response.status === 404) {
				toast({
					title: "Prompt not Found..! ✅",
					description: "Prompt does not exist in saved Prompts.",
				});
			}
			if (response.status === 403) {
				toast({
					title: "Unauthorized...! ⚠️",
					description: "You are not allowed to perform this Action.",
				});
			}

			if (response.ok) {
				toast({
					title: "Deleted..! ✅",
					description: "Prompt deleted Successfully.",
				});
			}
		} catch (e) {
			toast({
				title: "Error..! ⚠️",
				description: "Something went wrong, Please try again.",
			});
		}
	};

	return { deletePrompt };
};

export default useDeletePrompt;
