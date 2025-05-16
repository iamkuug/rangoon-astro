import type React from "react";

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
		<div className="flex flex-col md:flex-row items-start gap-6 p-4">
			<div className="flex items-center gap-4">
				<img
					alt={`${name} - ${role}`}
					className="object-cover w-24 h-24 rounded-full"
					src={image}
				/>
				<div className="flex flex-col items-start font-semibold text-brand-primary">
					<span className="text-2xl">{name}</span>
					<span className="font-normal text-gray-600">{role}</span>
				</div>
			</div>
			<div className="flex-1 bg-white rounded-lg px-4 py-3 border">
				<p className="text-brand-primary text-sm leading-relaxed">{bio}</p>
			</div>
		</div>
	);
};
