const { useState, useEffect } = require("react");

const useUserDetails = () => {
	const [userDetails, setUserDetails] = useState(null);
	const [loading, setLoading] = useState();
	const [userId, setUserId] = useState(null);

	const fetchUser = async (userId) => {
		if (!userId) {
			return;
		}

		try {
			setLoading(true);
			const response = await fetch(`/api/user/${userId}`);
			const data = await response.json();
			setUserDetails(data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (userId) {
			fetchUser(userId);
		}
	}, [userId]);

	return { loading, setUserId, fetchUser, userDetails };
};

export default useUserDetails;
