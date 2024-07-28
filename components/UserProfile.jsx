import { signOut } from 'next-auth/react';
import Link from 'next/link';
import PromptList from './Prompts/List';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const UserProfile = ({ page, loading, user }) => {
	if (loading) {
		return <div className="w-full min-h-screen text-center">Loading..!</div>;
	}

	console.log(user);

	return (
		<section className="w-full min-h-screen py-4 space-y-4 md:space-y-8">
			<div className="flex items-start justify-between">
				<div className="flex px-4 md:px-0 gap-4 md:gap-8 items-center justify-between">
					<Avatar className="w-16 h-16 md:w-24 md:h-24">
						<AvatarImage src={user?.user.image} alt={user?.user.username} />
					</Avatar>
					<div className="flex flex-col gap-0 md:gap-2">
						<div className="flex items-center gap-4">
							<h1 className="text-3xl md:text-4xl font-bold">
								{user?.user.username}
							</h1>
							{user?.user.isVerified ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6 md:w-8 md:h-8 antialiased"
								>
									<path
										fillRule="evenodd"
										d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
										clipRule="evenodd"
									/>
								</svg>
							) : null}
						</div>
						<p className="text-base md:text-2xl">{user?.user.email}</p>
					</div>
				</div>
				{page === 'myProfile' ? (
					<Button
						variant="outline"
						onClick={() => signOut()}
						className="hidden md:block"
					>
						Logout
					</Button>
				) : null}
			</div>
			<Separator />
			<main>
				{page === 'myProfile' ? (
					<Tabs defaultValue="myPrompts" className="w-full">
						<TabsList className="mx-4 md:mx-0">
							<TabsTrigger value="myPrompts">My Prompts</TabsTrigger>
							<TabsTrigger value="saved">Saved Prompts</TabsTrigger>
						</TabsList>
						<TabsContent value="myPrompts">
							{user?.userPrompts.length === 0 ? (
								<div className="flex flex-col gap-4 mt-8 items-center justify-center">
									<h1 className="text-4xl md:text-6xl text-center font-bold">
										{'Create your 1st Prompt.'}
									</h1>
									<p className="text-base md:text-2xl md:w-1/2 text-center text-balance text-muted-foreground">
										{
											'You have not created any prompts, try creating some Prompts so you can share them with others..!'
										}
									</p>
									<div className="flex items-center gap-4 mt-4">
										<Button asChild>
											<Link href={'/write'}>Create Prompt</Link>
										</Button>
										<Button asChild variant="outline">
											<Link href={'/prompts'}>Prompts</Link>
										</Button>
									</div>
								</div>
							) : (
								<PromptList tab="myPrompts" prompts={user?.userPrompts} />
							)}
						</TabsContent>
						<TabsContent value="saved">
							{user?.user.savedPrompts.length === 0 ? (
								<div className="flex flex-col gap-4 mt-8 items-center justify-center">
									<h1 className="text-4xl md:text-6xl text-center font-bold">
										{'Oh no..!'}
									</h1>
									<p className="text-base md:text-2xl md:w-1/2 text-center text-balance text-muted-foreground">
										{
											'You have not saved any prompts here, try saving some Prompts so you can view them later..!'
										}
									</p>
									<div className="flex items-center gap-4 mt-4">
										<Button asChild>
											<Link href={'/prompts'}>Explore Prompts</Link>
										</Button>
										<Button asChild variant="outline">
											<Link href={'/'}>Home</Link>
										</Button>
									</div>
								</div>
							) : (
								<PromptList
									tab="savedPrompts"
									prompts={user?.user.savedPrompts}
								/>
							)}
						</TabsContent>
					</Tabs>
				) : (
					<PromptList tab="userPrompts" prompts={user?.userPrompts} />
				)}
			</main>
		</section>
	);
};

export default UserProfile;
