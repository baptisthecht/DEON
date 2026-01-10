import { Deon } from "./deon";

export function Title({
	className,
	noDeon = false,
}: {
	className?: string;
	noDeon?: boolean;
}) {
	return (
		<div
			className={`flex flex-col items-center justify-center relative w-fit pt-16 lg:pt-18 pl-12 lg:pl-16 ${className}`}>
			<h1 className="tracking-wider text-5xl lg:text-7xl font-extralight">
				DÉON
			</h1>
			<h2 className="text-xs lg:text-lg tracking-wide">
				Ce qu'il convient de faire
			</h2>
			{!noDeon && (
				<Deon
					className="size-16 lg:size-22 absolute top-0 left-0"
					strokeWidth={4}
				/>
			)}
		</div>
	);
}
