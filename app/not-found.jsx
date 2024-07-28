import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
	return (
		<div className="h-screen w-full flex gap-2 flex-col items-center justify-center p-4 md:p-0">
			<div className="z-10">
				<Image
					src={"/NotFound.svg"}
					alt="Hero-Image"
					width={600}
					height={600}
					className="md:scale-150 contrast-200 dark:invert"
				/>
			</div>
			<div className="p-4 bg-white outline-8 outline-double rounded-xl">
				<h1 className="text-3xl md:text-6xl font-bold text-black">Page-Not-Found</h1>
			</div>
			<p className="md:w-1/2 text-center text-muted-foreground mt-2">
				Whoops! Looks like this page went on a digital vacation. Were working on
				bringing it back. Meanwhile, explore the rest of our site!
			</p>
			<div className="flex items-center gap-4 mt-4">
				<Button asChild>
					<Link href={"/"}>Go Home</Link>
				</Button>
				<Button asChild variant="outline">
					<Link href={"/"}>Sign Up</Link>
				</Button>
			</div>
		</div>
	);
};

export default NotFound;
