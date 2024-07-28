"use client";

import { getProviders, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Navbar = () => {
	const { data: session } = useSession();

	const [providers, setProviders] = useState(null);

	useEffect(() => {
		const fetchProviders = async () => {
			const response = await getProviders();
			setProviders(response);
		};

		fetchProviders();
	}, []);

	return (
		<nav className="py-4 px-4 lg:px-0 flex items-center justify-between">
			<Link
				href={"/"}
				className="w-fit flex items-center gap-4"
				title="Promptnation"
			>
				<span className="w-10 h-10 bg-foreground text-background rounded-sm flex items-center justify-center text-xl font-bold">
					{">P"}
				</span>
				<h1 className="text-xl font-bold text-primary hidden md:block">
					Promptnation
				</h1>
			</Link>
			<>
				<Desktop session={session} />
				<Mobile session={session} />
			</>
		</nav>
	);
};

export default Navbar;
