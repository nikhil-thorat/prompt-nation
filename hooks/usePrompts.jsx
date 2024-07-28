import { useEffect, useState } from "react";

const usePrompts = () => {
	const [loading, setLoading] = useState(false);
	const [prompts, setPrompts] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchPrompts = async () => {
			setLoading(true);
			try {
				const response = await fetch("api/prompts");
				const data = await response.json();

				setPrompts(data);
			} catch (error) {
				setError(true);
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		fetchPrompts();
	}, []);

	return { prompts, loading, error };
};

export default usePrompts;
