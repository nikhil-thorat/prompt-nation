import { companyDetails, footerLinks } from "@/utils/FooterData";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

const Footer = () => {
	return (
		<footer className="w-full h-fit mt-12 flex flex-col items-center justify-center gap-4">
			<main className="flex flex-col px-4 md:px-0 md:flex-row gap-4 md:gap-12 items-start justify-between">
				<div className="flex-[2]">
					<Link
						href={"/"}
						className="w-fit flex items-center gap-4"
						title="Promptnation"
					>
						<span className="w-12 h-12 md:w-24 md:h-24 bg-foreground text-background rounded-3xl flex items-center justify-center text-2xl md:text-6xl font-bold">
							{">P"}
						</span>
						<h1 className="text-3xl md:text-5xl font-bold">Promptnation</h1>
					</Link>
					<p className="text-base md:text-2xl font-light my-8 text-muted-foreground md:w-4/5 text-pretty">
						Promptnation is an open source AI prompting tool for modern world to
						discover, create and share creative AI prompts
					</p>
				</div>
				<div className="flex-1 flex flex-col gap-2 md:gap-6">
					<h1 className="text-xl">Links</h1>
					<div className="flex flex-col items-start gap-2">
						{footerLinks.map((link) => {
							return (
								<Link
									key={link.title}
									href={link.link}
									className="hover:underline  underline-offset-4 text-neutral-400 hover:text-primary"
								>
									{link.title}
								</Link>
							);
						})}
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-2 md:gap-6">
					<h1 className="text-xl">Company Details</h1>
					<div className="flex flex-col items-start gap-2">
						{companyDetails.map((companyDetail) => {
							return (
								<Link
									key={companyDetail.title}
									href={companyDetail.link}
									className="hover:underline  underline-offset-4 text-neutral-400 hover:text-primary"
								>
									{companyDetail.title}
								</Link>
							);
						})}
					</div>
				</div>
			</main>
			<Separator />
			<section className="w-full h-fit md:p-4 mb-4 flex items-center">
				<span className="text-center text-xs md:text-base w-full text-neutral-400">
					© All Rights Reserved - Promptnation 2023-2024
				</span>
			</section>
		</footer>
	);
};

export default Footer;
