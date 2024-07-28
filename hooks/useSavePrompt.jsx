import { useToast } from "@/components/ui/use-toast";
import { useSession } from "next-auth/react";

const useSavePrompt = () => {
	const { data: session } = useSession();
	const { toast } = useToast();

	const savePrompt = async (promptId) => {
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
				`/api/prompts/manage/${session.user.id}/${promptId}`,
				{
					method: "POST",
				}
			);
			if (response.status === 403) {
				toast({
					title: "Already Saved..! ✅",
					description: "Prompt is saved already.",
				});
			}

			if (response.ok) {
				toast({
					title: "Saved..! ✅",
					description: "Prompt saved Successfully.",
				});
			}
		} catch (e) {
			toast({
				title: "Error..! ⚠️",
				description: "Something went wrong, Please try again.",
			});
		}
	};

	return { savePrompt };
};

export default useSavePrompt;
