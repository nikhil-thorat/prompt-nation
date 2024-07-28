export function getRandomGradients() {
	const randomNumber = Math.floor(Math.random() * 7) + 1;
	const randomImage = `/${randomNumber}_gradient.png`;
	return randomImage;
}
