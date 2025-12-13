import { AnimatePresence, motion } from "motion/react";
import { Deon } from "./deon";

export function Monogramme({
	index,
	setIndex,
}: {
	index: number;
	setIndex: (index: number) => void;
}) {
	return (
		<AnimatePresence>
			{index !== 0 && (
				<motion.div
					onClick={() => setIndex(0)}
					className="fixed bottom-0 right-0 p-4 lg:p-10 cursor-pointer"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.5,
						ease: [0.65, 0, 0.35, 1],
					}}>
					<Deon className="size-12 lg:size-16" />
				</motion.div>
			)}
		</AnimatePresence>
	);
}
