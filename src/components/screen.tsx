// components/Screen.tsx
import { motion } from "motion/react";

export function Screen({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<section className={`w-screen h-screen snap-start ${className}`}>
			<motion.div className="w-full h-full">{children}</motion.div>
		</section>
	);
}
