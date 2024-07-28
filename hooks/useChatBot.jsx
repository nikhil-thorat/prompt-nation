import { useState } from 'react';

const { useToast } = require('@/components/ui/use-toast');
const { useSession } = require('next-auth/react');

const useChatBot = () => {
	const [prompt, setPrompt] = useState('');

	const [userPrompt, setUserPrompt] = useState('');
	const [botResponse, setBotResponse] = useState('');

	const { data: session } = useSession();
	const [loading, setLoading] = useState(false);

	const { toast } = useToast();

	const chatBotResponse = async () => {
		setUserPrompt(prompt);
		setLoading(true);

		if (!session?.user) {
			toast({
				title: 'Unauthenticated..! 🔑',
				description: 'Please Sing-In to use Chat Bot.',
			});
			return;
		}
		if (prompt === '') {
			toast({
				title: 'Invalid Prompt..! ⚠',
				description: 'Please enter a valid Prompt.',
			});
			return;
		}

		try {
			const response = await fetch('api/chatbot', {
				method: 'POST',
				body: JSON.stringify({
					prompt: prompt,
				}),
			});

			const data = await response.json();
			setBotResponse(data);
			setLoading(false);
			setPrompt('');

			return;
		} catch (error) {
			toast({
				title: 'Error..! ⚠️',
				description: 'Something went wrong, Please try again.',
			});
			setLoading(false);
		}
	};

	return {
		chatBotResponse,
		loading,
		botResponse,
		userPrompt,
		prompt,
		setPrompt,
	};
};

export default useChatBot;
