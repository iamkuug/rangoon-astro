import React from "react";

interface DirectorProfileCardProps {
	image: string;
	name: string;
	role: string;
	bio: string;
}

export const DirectorProfileCard: React.FC<DirectorProfileCardProps> = ({
	image,
	name,
	role,
	bio,
}) => {
	return (
		<div className="flex flex-col md:flex-row items-start  gap-22 mb-10  w-full">
			<div className="h-60 overflow-hidden">
				<img
					src={image}
					alt={name}
					className="w-64"
					loading="lazy"
				/>
			</div>
			<div className="flex-1 max-w-3xl bg-white p-6 rounded-lg shadow-md">
				<h2 className="text-2xl font-semibold text-brand-primary mb-1">
					{name}
				</h2>
				<p className="text-gray-600 mb-4">{role}</p>
				<p className="text-gray-700 leading-relaxed">{bio}</p>
			</div>
		</div>
	);
};
