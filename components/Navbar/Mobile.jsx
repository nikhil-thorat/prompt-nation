import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import ThemeToggle from './ThemeToggle';

const Mobile = ({ session }) => {
	return (
		<div className="flex lg:hidden ml-auto">
			<Sheet>
				<SheetTrigger asChild>
					<Button size="icon" variant="outline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
							/>
						</svg>
					</Button>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle className="text-2xl text-start">
							Promptnation
						</SheetTitle>
					</SheetHeader>
					<div className="flex flex-col items-start mt-4">
						<Button asChild variant="link">
							<Link href={'/prompts'}>Prompts</Link>
						</Button>
						{session?.user ? (
							<>
								<Button asChild variant="link">
									<Link href={'/write'}>Write</Link>
								</Button>
								<Button asChild variant="link">
									<Link href={'/profile'}>My Profile</Link>
								</Button>
								<Button asChild variant="link">
									<Link href={'/chat'}>Chat</Link>
								</Button>
							</>
						) : null}
						<ThemeToggle isMobile={true} />
					</div>
					<Separator className="my-4" />
					<SheetFooter>
						{session?.user ? (
							<Button className="w-full" onClick={() => signOut()}>
								{' '}
								Logout
							</Button>
						) : (
							<Button className="w-full" onClick={() => signIn('google')}>
								Sign In
							</Button>
						)}
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Mobile;
