import { motion } from "motion/react";
import { Description } from "../components/description";
import { Screen } from "../components/screen";
import { Subtitle } from "../components/subtitle";
import { Title } from "../components/title";

export function Home() {
	return (
		<Screen>
			<main className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-screen h-screen justify-between snap-start">
				<div className="flex flex-col gap-6 lg:gap-10 justify-end p-4 lg:p-20 shrink-0">
					<motion.div
						initial={{ y: 70 }}
						animate={{ y: 0 }}
						transition={{
							duration: 2.5,
							ease: [0.22, 1, 0.36, 1],
							delay: 0.3,
						}}>
						<Title />
					</motion.div>

					<div className="pl-12 lg:pl-16 flex flex-col gap-4 lg:gap-8">
						<motion.div
							initial={{ y: 100 }}
							animate={{ y: 0 }}
							transition={{
								duration: 2.5,
								ease: [0.22, 1, 0.36, 1],
								delay: 0.3,
							}}>
							<Subtitle />
						</motion.div>
						<motion.div
							initial={{ y: 200 }}
							animate={{ y: 0 }}
							transition={{
								duration: 2.5,
								ease: [0.22, 1, 0.36, 1],
								delay: 0.3,
							}}>
							<Description />
						</motion.div>
					</div>
				</div>
				<motion.img
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					transition={{
						duration: 2.5,
						ease: [0.22, 1, 0.36, 1],
						delay: 0.3,
					}}
					src="/images/1.webp"
					loading="lazy"
					decoding="async"
					alt="Deon"
					className="size-full object-cover"
				/>
			</main>
		</Screen>
	);
}
