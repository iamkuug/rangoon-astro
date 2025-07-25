import { Briefcase } from "lucide-react";
import { FileText } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { FileChartLine } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { MessageCircleQuestion } from "lucide-react";
import { FileSpreadsheet } from "lucide-react";
import { Newspaper } from "lucide-react";
import { FileCheck } from "lucide-react";
import { InvestorRelationsCard } from "./investor-relations-card";

import filterBg1 from "../assets/filter-bg/filter-bg-1.png"
import filterBg2 from "../assets/filter-bg/filter-bg-2.png"
import filterBg3 from "../assets/filter-bg/filter-bg-3.png"
import filterBg4 from "../assets/filter-bg/filter-bg-4.png"
import filterBg5 from "../assets/filter-bg/filter-bg-5.png"
import filterBg6 from "../assets/filter-bg/filter-bg-6.png"

import investorRelationsBg from "../assets/investor-relations-bg.png";
import investorRelationsIllustration from "../assets/investor-relations-illustration.png";
import swoosh from "../assets/swoosh.png";

export const InvestorRelations = () => {
	const investorActions = [
		{
			title: "Annual Reports & Disclosures",
			link: "/investor-relations/annual-reports",
			icon: <FileText strokeWidth={1.6} size={32} />,
			backgroundImage:
			filterBg1
		},
		{
			title: "Financial Statements",
			link: "/investor-relations/financial-statements",
			icon: <FileChartLine strokeWidth={1.6} size={32} />,
			backgroundImage:
			filterBg2
		},
		{
			title: "FAQs",
			link: "/investor-relations/frequently-asked-questions",
			icon: <MessageCircleQuestion strokeWidth={1.6} size={32} />,
			backgroundImage:
			filterBg3
		},
		{
			title: "Prospectus",
			link: "/investor-relations/prospectus",
			icon: <FileSpreadsheet strokeWidth={1.6} className="-scale-x-[1]" size={32} />,
			backgroundImage:
			filterBg4
		},
		{
			title: "News & Market Insights",
			link: "/investor-relations/news-and-market-insights",
			icon: <Newspaper size={32} strokeWidth={1.6} />,
			backgroundImage:
			filterBg5
		},
		{
			title: "Factsheets",
			link: "/investor-relations/factsheets",
			icon: <FileCheck size={32} strokeWidth={1.6} />,
			backgroundImage:
			filterBg6
		},
	];

	return (
		<div className="">
			<section className="relative flex items-center justify-center py-10 font-sans px-5 overflow-hidden">
				{/* <img src={swoosh.src} alt="swoosh-bg" className="absolute w-[2500px]" /> */}
				<div className="flex flex-col items-start w-4/5 mx-auto gap-y-12 z-10 pb-10">
					<div className="w-full">
						<h1 className="text-3xl">
							Investor Relations
						</h1>
					</div>
					{/* Desktop Grid */}
					<div className="hidden md:grid grid-cols-3 w-full gap-10">
						{investorActions.map(({ icon, backgroundImage, link, title }, i) => (
							<InvestorRelationsCard
								icon={icon}
								text={title}
								key={i}
								link={link}
								backgroundImage={backgroundImage.src}
							/>
						))}
					</div>
					{/* Mobile List */}
					<div className="md:hidden w-full flex flex-col gap-3">
						{investorActions.map(({ icon, link, title }, i) => (
							<a
								key={i}
								href={link}
								className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
							>
								<div className="text-white">{icon}</div>
								<span className="text-white font-medium">{title}</span>
							</a>
						))}
					</div>
				</div>
			</section>
			<section className="relative flex items-center justify-center py-10 px-5 h-[250px] md:h-[350px] overflow-hidden">
				<img
					className="absolute inset-0 w-full h-full object-cover -z-10"
					src={investorRelationsBg.src}
					alt="canon-tower-gray"
				/>
				<img
					className="absolute right-[200px] w-[350px] bottom-0 hidden md:block"
					src={investorRelationsIllustration.src}
					alt="canon-tower-gray"
				/>
				<div className="w-4/5 mx-auto flex flex-col items-center md:items-start text-center md:text-left gap-4">
					<h1 className="text-3xl md:text-5xl  font-semibold">
						Ready to Invest?
					</h1>
					<a
						href="https://onboarding.ic.africa"
						target="_blank"
						rel="noopener noreferrer"
						className="font-semibold bg-brand-secondary text-white rounded-full px-4 py-1 hover:ring-2 hover:ring-brand-secondary hover:ring-offset-1 active:bg-brand-secondary/80"
					>
						Invest with Us
					</a>
				</div>
			</section>
		</div>
	);
};
