import { Image } from "astro:assets";
import React, { type FC, useState } from "react";
import icLogo from "../assets/ic-logo-white.png";
import { Container } from "./container";
import { AlignRight, Menu, Plus, X } from "lucide-react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuLink,
	NavigationMenuTrigger,
	NavigationMenuItem,
} from "./ui/navigation-menu";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
	className?: string;
}

interface NavItem {
	path: string;
	label: string;
}

const navItems: NavItem[] = [
	{ path: "/", label: "HOME" },
	{ path: "/about-us", label: "ABOUT US" },
	{ path: "/investor-relations", label: "INVESTOR RELATIONS" },
	{ path: "/get-in-touch", label: "GET IN TOUCH" },
	{ path: "/property-portfolio", label: "PROPERTY PORTFOLIO" },
];

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
	const [isOpen, setIsOpen] = useState(false);
	const currentPath = new URL(window.location.href).pathname;

	const isActive = (path: string): boolean => currentPath === path;

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav
			className={`flex items-center justify-between -my-1  ${
				isActive("/") ? "bg-transparent" : "bg-brand-primary"
			} ${className}`}
		>
			<Container className="flex items-center  justify-between">
				<a href="/">
					<img
						src={icLogo.src}
						alt="ic-logo"
						className="w-14 h-14 md:w-20 md:h-20 object-contain"
					/>
				</a>

				<button
					type="button"
					onClick={toggleMenu}
					className="md:hidden text-white p-2"
					aria-label="Toggle menu"
				>
					{isOpen ? <X size={24} /> : <AlignRight size={24} />}
				</button>

				<ul className="hidden md:flex items-center text-white text-sm">
					{navItems.map(({ path, label }) =>
						path === "/about-us" ? (
							<>
								<NavigationMenu key={path}>
									<li key={path} className="">
										<NavigationMenuItem className="relative">
											<NavigationMenuTrigger
												className={`bg-transparent active:bg-transparent ml-4 py-1.5 cursor-pointer ${
													isActive(path) || isActive("/about-us/directors")
														? "bg-brand-accent rounded-full"
														: ""
												}`}
											>
												{" "}
												ABOUT US{" "}
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<NavigationMenuLink href="/about-us" className="w-32">
													More Info
												</NavigationMenuLink>
												<NavigationMenuLink href="/about-us/directors">
													Directors
												</NavigationMenuLink>
											</NavigationMenuContent>
										</NavigationMenuItem>
									</li>
								</NavigationMenu>
							</>
						) : (
							<li key={path} className="relative">
								<a
									href={path}
									className={`px-4 py-1.5 ${
										isActive(path) ? "bg-brand-accent rounded-full" : ""
									}`}
								>
									{label}
								</a>
							</li>
						),
					)}
				</ul>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
							className="fixed top-0 w-3/4 h-screen z-50 right-0 bg-white md:hidden"
						>
							<div className="flex w-full justify-end">
								<button
									type="button"
									onClick={toggleMenu}
									className="md:hidden text-black p-2"
									aria-label="Toggle menu"
								>
									<X size={24} />
								</button>
							</div>
							<ul className="flex flex-col items-start p-4 space-y-4 text-black text-sm">
								{navItems.map(({ path, label }) =>
									path === "/about-us" ? (
										<li key={path} className="w-full">
											<details className="group">
												<summary className="flex items-center justify-between w-full px-4 py-1.5 cursor-pointer list-none">
													ABOUT US
													<span className="group-open:rotate-45 transition-transform">
														<Plus
															size={16}
															strokeWidth={2.5}
															className="text-gray-800"
														/>
													</span>
												</summary>
												<div className="ml-5 mt-2 flex flex-col space-y-2">
													<a
														href="/about-us"
														className="px-4 py-1.5 hover:text-brand-primary"
														onClick={() => setIsOpen(false)}
													>
														More Info
													</a>
													<a
														href="/about-us/directors"
														className="px-4 py-1.5 hover:text-brand-primary"
														onClick={() => setIsOpen(false)}
													>
														Directors
													</a>
												</div>
											</details>
										</li>
									) : (
										<li key={path} className="w-full">
											<a
												href={path}
												className="block px-4 py-1.5"
												onClick={() => setIsOpen(false)}
											>
												{label}
											</a>
										</li>
									),
								)}
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</Container>
		</nav>
	);
};
