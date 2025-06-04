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
				isMobile ? "h-32" : "h-64"
			} rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center cursor-pointer ${
				isMobile ? "px-4 py-3" : "px-10 py-5"
			} ${backgroundImage ? "" : bgColor}`}
		>
			<div className="absolute inset-0 bg-brand-secondary opacity-50 z-10" />
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
						className={`font-semibold absolute bottom-0 left-0 leading-tight ${
							isMobile ? "text-sm w-24" : "text-xl w-32"
						}`}
					>
						{text}
					</p>
				)}
			</div>
		</div>
	);
};
