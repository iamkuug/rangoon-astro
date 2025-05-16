import React from "react";
import { Container } from "./container";
import rangoonLogoBlue from "../assets/rangoon-logo-blue.png";

export const Footer = () => {
	return (
		<footer className="text-black  h-[300px] flex items-center justify-center bg-gray-100">
			<Container className="flex items-start justify-between">
				<div>
					<img className="w-52" src={rangoonLogoBlue.src} alt="Rangoon-Logo" />
				</div>
				<div>
					<h3 className="text-lg font-semibold text-brand-primary">
						REIT Manager
					</h3>
					<div className="py-2">
						<p>REIT IC Asset Managers (Ghana) Limited</p>
						<p>No. 2 Johnson Sirleaf Road</p>
						<p>North Ridge – Accra, Ghana</p>
					</div>
				</div>
				<div>
					<h3 className="text-lg font-semibold text-brand-primary">
						Contact Us
					</h3>
					<div className="py-2">
						<p>Phone: +233 (0) 30 8250 051</p>
						<p>Email: clientservice@ic.africa</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};
