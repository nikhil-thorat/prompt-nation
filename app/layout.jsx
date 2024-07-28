import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Newsletter from '@/components/Newsletter';
import { Toaster } from '@/components/ui/toaster';
import GlobalProvider from '@/provider/GlobalProvider';
import './globals.css';

export const metadata = {
	title: 'Promptnation',
	description: 'Discover and Share AI Prompts',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<meta name="referrer" content="no-referrer" />
			<body
				className={
					'w-screen min-h-screen scroll-smooth overflow-y-auto subpixel-antialiased d:bg-red-900'
				}
			>
				<GlobalProvider>
					<main className="container px-0 mx-auto font-mono relative">
						<Toaster />
						<Navbar />
						{children}
						<Newsletter />
						<Footer />
					</main>
				</GlobalProvider>
			</body>
		</html>
	);
}
