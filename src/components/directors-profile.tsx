import React from "react";
import { DirectorProfileCard } from "./directors-profile-card";

import cynthia from "../assets/directors/cynthia.png";
import shadrack from "../assets/directors/shadrack.png";
import akua from "../assets/directors/akua.png";
import kweku from "../assets/directors/kweku.png";
import nana from "../assets/directors/nana.png";
import bg from "../assets/get-in-touch-bg.png";

export const DirectorsProfile = () => {
	const directors = [
		{
			image: cynthia.src,
			name: "Cynthia Aduonum-Darko Acquaye",
			role: "Real Estate & Energy Consultant",
			bio: "Cynthia is a seasoned leader in both real estate and energy sectors, boasting over 25 years of experience within the O&M Group of associated companies. Currently, she serves as the Group CEO of this group and holds a Board Directorship in its subsidiary properties; Tema Tank Farm, Oasis Energy, and Moiba Ghana. She gained recognition with the 2019 Africa International Award of Merit for her commitment to business integrity. In her role as Group CEO, Cynthia's focus is on steering strategic direction and pursuing growth opportunities across the group's various entities.",
		},
		{
			image: shadrack.src,
			name: "Shadrack Arhin",
			role: "Lawyer",
			bio: "With 22 years of rich legal experience, Shadrack founded Corporate Legal Concepts in the year 2007, where he is currently the Head of Chambers and leads a team of legal practitioners to render legal services to both local and international clients in various sectors of the economy including but not limited to advising on FIDIC Contracts, Drafting various Oil and Gas Agreements (Upstream and Downstream), and various Property, Land, and Conveyancing (Real Property) Law advice and Drafting. Shadrack obtained an LLB degree from the Faculty of Law of the University of Ghana, Legon in 1984.",
		},
		{
			image: akua.src,
			name: "Akua Brayie Owusu-Nartey",
			role: "Marketing and Brand Consultant",
			bio: "Akua is the Chief Client Officer of Ogilvy Africa driving best-in-class operational excellence for Ogilvy's top clients in sub-Saharan Africa. Akua plays a dual role as the head of Connected Culture, working closely with the Africa leadership and Executive Committee and the regional Chief Belief Officer - chief talent officer with a passion for its people across key markets including Kenya, Ghana, Tanzania, Zambia and Uganda. Akua is a marketing powerhouse with over 18 years' experience creating impactful communication campaigns and building recognizable brands.",
		},
		{
			image: kweku.src,
			name: "Kweku Nimfah-Essuman",
			role: "Chartered Accountant",
			bio: "Kweku was the Chief Financial Officer and a Board member of Standard Chartered Bank Ghana from September 2016 to September 2019. During this period, he was responsible for providing leadership and played a critical role in the delivery of financial controls and maintenance of high standards in finance and regulatory reporting in addition to tax risk management of the Bank. Kweku has a strong finance, regulatory and audit background. He was the Financial Controller for Standard Chartered Bank from June 2009 till August 2016.",
		},
		{
			image: nana.src,
			name: "Nana Wiafe Boamah",
			role: "Chartered Financial Analyst",
			bio: "Nana Wiafe is the Chief Investment Officer of Axis Pension Trust, where he works on Strategic Asset Allocation for the Trust's assets and works with external managers to implement investment policies. Nana also doubles as the Managing Director of Axis Wealth Builders, whose purpose for clients is to deploy investment solutions, alongside working with clients to achieve their financial goals. Nana is a CFA® Charter holder and currently the president of the CFA Society, Ghana. Nana enjoys watching basketball and is a devoted runner",
		},
	];

	return (
		<div className="get-in-touch-page h-auto" style={{
            backgroundImage: `url(${bg.src})`,
        }}>
			<section className="flex items-center justify-center pt-10 px-5">
				<div className="w-4/5 mx-auto flex flex-col items-start gap-4">
					<h1 className="text-4xl text font-semibold text-brand-primary">
						Directors
					</h1>
				</div>
			</section>
			<section className="relative flex items-center justify-center py-10 px-5">
				<div className="w-4/5 mx-auto flex flex-col items-start gap-6 ">
					{directors.map((director, index) => (
						<DirectorProfileCard
							key={director.name}
							image={director.image}
							name={director.name}
							role={director.role}
							bio={director.bio}
						/>
					))}
				</div>
			</section>
		</div>
	);
};
