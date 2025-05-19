import { Image } from "astro:assets";
import React, { type FC } from "react";
import icLogo from "../assets/ic-logo-white.png";
import { Container } from "./container";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuLink,
	NavigationMenuTrigger,
} from "./ui/navigation-menu";

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
	const currentPath = new URL(window.location.href).pathname;

	const isActive = (path: string): boolean => currentPath === path;

	return (
		<nav
			className={`flex items-center justify-between -my-1 ${
				isActive("/") ? "bg-transparent" : "bg-brand-primary"
			} ${className}`}
		>
			<Container className="flex items-center justify-between">
				<a href="/">
					<img
						src={icLogo.src}
						alt="ic-logo"
						className="w-20 h-20 object-contain"
					/>
				</a>
				<ul className="flex items-center text-white text-sm">
					{navItems.map(({ path, label }) =>
						path === "/about-us" ? (
							<>
								<NavigationMenu key={path}>
									<li key={path} className="">
										<NavigationMenuItem className="relative">
											<NavigationMenuTrigger
												className={`bg-transparent active:bg-transparent ml-4 py-1.5 cursor-pointer ${
													isActive(path) || isActive("/about-us/directors") ? "bg-brand-accent rounded-full" : ""
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
			</Container>
		</nav>
	);
};
