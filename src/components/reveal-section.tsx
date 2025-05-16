import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";

interface RevealSectionProps {
	children: ReactNode;
	delay?: number;
}

export const RevealSection = ({ children, delay = 0 }: RevealSectionProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 30 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
			transition={{
				duration: 0.8,
				delay,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.div>
	);
};
