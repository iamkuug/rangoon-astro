import React from "react";
import { Container } from "./container";
import rangoonLogoBlue from "../assets/rangoon-logo-gold.png";

export const Footer = () => {
	return (
		<footer className="text-black min-h-[300px] flex items-center justify-center bg-gray-100 py-8 md:py-0">
			<Container>
				<div className="flex flex-col gap-12">
					<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-4">
						<div className="flex justify-center md:block">
							<img className="w-40 md:w-52" src={rangoonLogoBlue.src} alt="Rangoon-Logo" />
						</div>

						<div className="text-center md:text-left">
							<h3 className="text-lg font-semibold text-brand-primary mb-3 md:mb-2">
								REIT Manager
							</h3>
							<div className="space-y-1.5 md:py-2">
								<p className="text-sm md:text-base">IC Asset Managers (Ghana) Limited</p>
								<p className="text-sm md:text-base text-gray-600">No. 2 Johnson Sirleaf Road</p>
								<p className="text-sm md:text-base text-gray-600">North Ridge – Accra, Ghana</p>
							</div>
						</div>

						<div className="text-center md:text-left">
							<h3 className="text-lg font-semibold text-brand-primary mb-3 md:mb-2">
								Contact Us
							</h3>
							<div className="space-y-1.5 md:py-2">
								<p className="text-sm md:text-base">Phone: +233 (0) 30 8250 051</p>
								<p className="text-sm md:text-base">Email: clientservice@ic.africa</p>
							</div>
						</div>
					</div>

					<div className="text-center md:text-left border-t border-gray-200 pt-6">
						<p className="text-sm text-gray-500">© 2025 Rangoon REIT. All rights reserved.</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};