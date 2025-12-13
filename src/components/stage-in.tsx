import { motion } from "motion/react";
import { DeonLeft } from "./deon-left";
import { DeonRight } from "./deon-right";

interface StageInProps {
	isVisible: boolean;
}

export function StageIn({ isVisible }: StageInProps) {
	if (!isVisible) return null;
	return (
		<motion.div
			key="stage-in"
			initial={{ height: "100vh" }}
			exit={{ height: 0 }}
			transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
			className="fixed top-0 left-0 w-screen  bg-black flex items-center justify-center overflow-hidden z-50">
			<motion.div
				className="flex items-center justify-center"
				initial={{ y: 0 }}
				animate={{ y: -200 }}
				transition={{
					duration: 2,
					ease: "linear",
					delay: 1.6,
				}}>
				{/* Vient d'en haut */}
				<motion.div
					style={{
						x: 40,
					}}
					initial={{ y: -1000 }}
					animate={{ y: 0 }}
					transition={{
						duration: 1,
						ease: [0.76, 0, 0.24, 1],
						delay: 0.5,
					}}>
					<DeonLeft
						className="stroke-white size-20"
						strokeWidth={5}
					/>
				</motion.div>
				{/* Vient d'en bas */}
				<motion.div
					style={{
						x: -40,
					}}
					initial={{ y: 1000 }}
					animate={{ y: 0 }}
					transition={{
						duration: 1,
						ease: [0.76, 0, 0.24, 1],
						delay: 0.5,
					}}>
					<DeonRight
						className="stroke-white size-20"
						strokeWidth={5}
					/>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
