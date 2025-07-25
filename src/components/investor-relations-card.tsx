import React from "react";

interface InvestorRelationsCardProps {
	backgroundImage?: string;
	icon?: React.ReactNode;
	text?: string;
	bgColor?: string;
	isMobile?: boolean;
}

export const InvestorRelationsCard: React.FC<InvestorRelationsCardProps> = ({
	backgroundImage,
	icon,
	text,
	bgColor = "bg-brand-secondary",
	isMobile = false,
}) => {
	return (
		<div
			className={`group relative w-full ${
				isMobile ? "h-32" : "h-52"
			} rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center cursor-pointer ${
				isMobile ? "px-4 py-3" : "px-8 py-5"
			} ${backgroundImage ? "" : bgColor}`}
		>
			<div className="absolute inset-0 z-10" />
			<img
				src={backgroundImage}
				className="group-hover:scale-110 transition-all ease-in-out absolute w-full h-full object-cover"
				alt=""
				loading="lazy"
				decoding="async"
			/>

			<div className="relative z-10 w-full h-full text-white">
				{icon && (
					<div
						className={`absolute top-0 right-0 ${
							isMobile ? "text-3xl" : "text-5xl"
						}`}
					>
						{icon}
					</div>
				)}
				{text && (
					<p
						className={`absolute bottom-0 left-0 leading-tight ${
							isMobile ? "text-sm w-24" : "text-lg w-52"
						}`}
					>
						{text}
					</p>
				)}
			</div>
		</div>
	);
};
