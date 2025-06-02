import type React from "react";
import type { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export const Container: React.FC<ContainerProps> = ({
	children,
	className = "",
}) => {
	return <div className={`md:w-4/5 w-5/6 mx-auto ${className}`}>{children}</div>;
};
