import Card from "./Card";

const PromptList = ({ tab, prompts }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 md:p-0">
			{prompts?.map((prompt) => {
				return <Card key={prompt._id} prompt={prompt} tab={tab} />;
			})}
		</div>
	);
};

export default PromptList;
