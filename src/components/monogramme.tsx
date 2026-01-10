import { AnimatePresence, motion } from "motion/react";
import { Deon } from "./deon";
import { Title } from "./title";

export function Monogramme({
	index,
	setIndex,
	full = false,
}: {
	index: number;
	setIndex: (index: number) => void;
	full?: boolean;
}) {
	return (
		<AnimatePresence>
			{index !== 0 && (
				<motion.div
					onClick={() => setIndex(0)}
					className="fixed bottom-0 right-0 p-4 lg:p-10 cursor-pointer flex flex-col justify-end **:text-black"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.5,
						ease: [0.65, 0, 0.35, 1],
					}}>
					<Deon
						className="size-12 lg:size-16 text-black"
						strokeWidth={4}
					/>
					<motion.div
						className="overflow-hidden"
						initial={{
							height: full ? "auto" : 0,
							width: full ? "auto" : 0,
						}}
						animate={{
							height: full ? "auto" : 0,
							width: full ? "auto" : 0,
						}}
						style={{
							transformOrigin: "top",
						}}
						transition={{
							duration: 0.5,
							ease: [0.65, 0, 0.35, 1],
						}}>
						<Title
							className="scale-75 pl-6! pt-0! -mt-2.5 text-neutral-500"
							noDeon
						/>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
