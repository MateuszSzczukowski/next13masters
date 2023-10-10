"use client";
import { ActiveLinkPropsType } from "@/types/ActiveLink.types";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const ActiveLink = ({
	slug,
	className = "",
	activeClassName = "bg-gray-900 text-white",
	text,
	href,
}: ActiveLinkPropsType) => {
	const segment = useSelectedLayoutSegment();
	const isActive = slug === segment;

	return (
		<Link
			href={href}
			className={`${className} ${isActive ? activeClassName : ""}`}
			{...(isActive && { "aria-current": "page" })}
		>
			{text}
		</Link>
	);
};
