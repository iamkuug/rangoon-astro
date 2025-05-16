import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroBg from "../assets/hero-bg.png";

export const HomeHero = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { scrollY } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const y = useTransform(scrollY, [0, 500], [0, 150]);
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);
 
	return (
		<section ref={containerRef} className="relative h-[650px] ">
			<motion.div className="relative text-white flex items-center justify-center text-center py-20 h-full">
				<motion.h1
					style={{ opacity }}
					className="absolute top-[12rem] text-5xl font-semibold w-[450px] leading-[4rem] z-10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					Buy the Best Part of Accra
				</motion.h1>
				<motion.div className="absolute  -z-10" style={{ y }}>
					<img
						src={heroBg.src}
						alt="hero-bg"
						className="w-full h-full "
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};
