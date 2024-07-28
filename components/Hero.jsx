import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const Hero = () => {
	return (
		<section className="flex flex-col items-center justify-center gap-20 w-full h-dvh " id='hero'>
			<main className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-0">
				<div className="flex-1 flex md:items-start flex-col gap-1 px-4 lg:px-0">
					<h1 className="text-5xl md:text-8xl text-start font-bold">
						Discover & Share
					</h1>
					<h1 className="text-3xl md:text-6xl font-medium">
						AI-Powered Prompts
					</h1>
					<p className="text-base text-start md:text-2xl my-4 md:my-8 text-muted-foreground">
						Promptnation is an open source AI prompting tool for modern world to
						discover, create and share creative AI prompts
					</p>
					<div className="flex w-full md:w-fit items-center gap-2">
						<Button className="w-fit flex-1" asChild>
							<Link href={'/prompts'}>View Prompts</Link>
						</Button>
						<Button variant="outline" className="w-fit flex-1" asChild>
							<Link href={'/write'}>Write</Link>
						</Button>
					</div>
				</div>
				<div className="flex-1 flex justify-end">
					<Image
						src={'/Hero.svg'}
						alt="Hero-Image"
						width={600}
						height={600}
						className="scale-150 text-white dark:invert"
					/>
				</div>
			</main>
			<Link href={'#newsletter'} className="animate-bounce">
				<Button
					size="icon"
					variant="link"
					className="opacity-50 hover:opacity-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m19.5 8.25-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</Button>
			</Link>
		</section>
	);
};

export default Hero;
