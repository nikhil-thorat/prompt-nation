export const createUsername = (email) => {
	const username = email.split("@")[0];

	return username;
};
