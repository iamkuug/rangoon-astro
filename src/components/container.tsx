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
	return <div className={`w-4/5 mx-auto ${className}`}>{children}</div>;
};
