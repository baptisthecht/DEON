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
			className={`flex flex-col items-center justify-center relative w-fit pt-16 md:pt-17 lg:pt-18 xl:pt-18 pl-12 md:pl-14 lg:pl-15 xl:pl-16 ${className}`}>
			<h1 className="tracking-wider text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-extralight">
				DÉON
			</h1>
			<h2 className="text-xs md:text-sm lg:text-lg xl:text-lg tracking-wide">
				Ce qu'il convient de faire
			</h2>
			{!noDeon && (
				<Deon
					className="size-16 md:size-18 lg:size-20 xl:size-22 absolute top-0 left-0"
					strokeWidth={4}
				/>
			)}
		</div>
	);
}
