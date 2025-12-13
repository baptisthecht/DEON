export function DeonLeft({
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
			{/* Arc gauche (plus bas) */}
			<path d="M100 60 A90 90 0 0 0 100 240" />

			{/* Ligne centrale */}
			<path d="M100 60 L100 240" />
		</svg>
	);
}
