"use client";
import { ActiveLinkPropsType } from "@/types/ActiveLink.types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ActiveLink = ({
	children,
	className = "",
	activeClassName = "bg-gray-900 text-white",
	href,
}: ActiveLinkPropsType) => {
	const pathname = usePathname();
	const isActive: boolean = pathname === href;

	return (
		<a
			href={href}
			className={`${className} ${isActive ? activeClassName : ""}`}
			{...(isActive && { "aria-current": "page" })}
		>
			{children}
		</a>
	);
};
