import { motion } from "motion/react";
import { useRef } from "react";

interface ScrollProps {
	images: {
		src: string;
		alt: string;
		width: string;
	}[];
}

export const InfiniteScroll = ({ images }: ScrollProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div className="overflow-hidden">
			<motion.div
				ref={containerRef}
				className="flex gap-x-16 items-center"
				animate={{
					x: [0, -1000],
				}}
				transition={{
					x: {
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					},
				}}
			>
				{/* Original set */}
				{images.map((image, i) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className={`${image.width} flex items-center justify-center`}
					>
						<img
							src={image.src}
							alt={image.alt}
							className="w-full h-full object-contain"
						/>
					</div>
				))}
				{/* Duplicated set for seamless loop */}
				{images.map((image, i) => (
					<div
						key={`clone-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
i}`}
						className={`${image.width} flex items-center justify-center`}
					>
						<img
							src={image.src}
							alt={image.alt}
							className="w-full h-full object-contain"
						/>
					</div>
				))}
			</motion.div>
		</div>
	);
};
