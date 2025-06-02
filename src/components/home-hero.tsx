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
		<section
			ref={containerRef}
			className=" h-[250px]  md:h-[650px] w-full"
		>
			<motion.div className="relative text-white flex items-center justify-center text-center py-20 h-full">
				<motion.h1
					style={{ opacity }}
					className="absolute md:top-[12rem] text-2xl md:text-5xl font-semibold md:w-[450px] w-[200px] md:leading-[4rem] z-10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					Buy the Best Part of Accra
				</motion.h1>
			</motion.div>

			<motion.div className="top-0 absolute w-full -z-10 " style={{ y }}>
				<img src={heroBg.src} alt="hero-bg" className="w-full h-[300px] md:h-[750px] object-cover" />
			</motion.div>
		</section>
	);
};
