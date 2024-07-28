import { useEffect, useState } from "react";

const usePromptDetails = ({ promptId }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [prompt, setPrompt] = useState({});

	useEffect(() => {
		if (promptId === undefined) {
			return;
		}

		const fetchPrompt = async () => {
			setLoading(true);

			if (promptId === null) {
				return;
			}

			try {
				const response = await fetch(`/api/prompts/${promptId}`);
				const data = await response.json();
				setPrompt(data);
			} catch (error) {
				setError(true);
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		fetchPrompt();
	}, [promptId]);

	return { prompt, setPrompt, loading, error };
};

export default usePromptDetails;
