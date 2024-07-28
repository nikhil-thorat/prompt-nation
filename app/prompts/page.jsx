"use client";

import List from "@/components/Prompts/List";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import usePrompts from "@/hooks/usePrompts";
import { useEffect, useState } from "react";

const Prompts = () => {
	const { prompts, loading } = usePrompts();

	const [search, setSearch] = useState("");

	const [searchResult, setSearchResult] = useState([]);

	useEffect(() => {
		if (search == "" || search.trim() == "") {
			return;
		}

		const filteredPrompts = prompts.filter((prompt) => {
			if (
				search[0] == "@" &&
				prompt.creator.username.includes(search.slice(1, search.length))
			) {
				return prompt;
			}
			if (
				search[0] == "#" &&
				prompt.tag.includes(search.slice(1, search.length))
			) {
				return prompt;
			}
			if (prompt.prompt.includes(search)) {
				return prompt;
			}
		});

		setSearchResult(filteredPrompts);
	}, [search, prompts]);
	return (
		<section className="flex flex-col items-center min-h-screen h-auto">
			<div className="flex flex-col gap-2 w-full items-start md:items-center justify-center h-fit p-4 md:p-8">
				<h1 className="text-4xl font-bold text-center">Discover Prompts</h1>
				<p className="text-xl text-start md:text-center text-muted-foreground font-light">
					Discover and Explore prompts from around the World..!
				</p>
				<div className="flex w-full md:max-w-md items-center gap-2 mt-4">
					<Input
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search for #Tags and @Users..."
					/>
					<Button variant="secondary" size="icon" className="md:hidden w-12">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path
								fillRule="evenodd"
								d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
								clipRule="evenodd"
							/>
						</svg>
					</Button>
				</div>
			</div>
			{loading ? <span className="">Loading..!</span> : null}
			<div className="w-full">
				{search != "" || search.trim() != "" ? (
					<List prompts={searchResult} />
				) : (
					<List prompts={prompts} />
				)}
			</div>
		</section>
	);
};

export default Prompts;
