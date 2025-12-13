export function DeonRight({
	className,
	strokeWidth = 2,
}: {
	className?: string;
	strokeWidth?: number;
}) {
	return (
		<svg
			viewBox="0 0 200 260"
			className={className}
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round">
			{/* Arc droit (plus haut) */}
			<path d="M100 20 A90 90 0 0 1 100 200" />

			{/* Ligne centrale */}
			<path d="M100 20 L100 200" />
		</svg>
	);
}
