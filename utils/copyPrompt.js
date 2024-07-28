export const copyPrompt = (prompt) => {
	if (navigator.clipboard && window.isSecureContext) {
		navigator.clipboard.writeText(prompt);
	}
};
