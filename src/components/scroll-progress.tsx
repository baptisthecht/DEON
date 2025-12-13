export function ScrollProgress({ percentage }: { percentage: number }) {
	return (
		<div className="fixed bottom-0 left-0 w-full h-2">
			<div
				className="h-full bg-blue-500"
				style={{ width: `${percentage}%` }}></div>
		</div>
	);
}
