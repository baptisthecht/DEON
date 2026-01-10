import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Branding } from "../screens/branding";
import { Home } from "../screens/home";
import { Maya } from "../screens/maya";
import { Monogramme } from "./monogramme";

const SCREENS = [Home, Branding, Maya];

export function ScreenManager() {
	const [index, setIndex] = useState(0);
	const isAnimating = useRef(false);
	const touchStart = useRef(0);
	const touchEnd = useRef(0);

	useEffect(() => {
		// Gestion du scroll sur desktop
		const onWheel = (e: WheelEvent) => {
			e.preventDefault();
			if (isAnimating.current) return;
			if (e.deltaY > 0 && index < SCREENS.length - 1) {
				setIndex((i) => i + 1);
			}
			if (e.deltaY < 0 && index > 0) {
				setIndex((i) => i - 1);
			}
			isAnimating.current = true;
			setTimeout(() => {
				isAnimating.current = false;
			}, 900);
		};

		// Gestion du swipe sur mobile
		const onTouchStart = (e: TouchEvent) => {
			touchStart.current = e.touches[0].clientY;
		};

		const onTouchMove = (e: TouchEvent) => {
			touchEnd.current = e.touches[0].clientY;
		};

		const onTouchEnd = () => {
			if (isAnimating.current) return;

			const swipeDistance = touchStart.current - touchEnd.current;
			const minSwipeDistance = 50; // Distance minimale pour détecter un swipe

			if (
				swipeDistance > minSwipeDistance &&
				index < SCREENS.length - 1
			) {
				// Swipe vers le haut
				setIndex((i) => i + 1);
				isAnimating.current = true;
				setTimeout(() => {
					isAnimating.current = false;
				}, 900);
			}

			if (swipeDistance < -minSwipeDistance && index > 0) {
				// Swipe vers le bas
				setIndex((i) => i - 1);
				isAnimating.current = true;
				setTimeout(() => {
					isAnimating.current = false;
				}, 900);
			}
		};

		window.addEventListener("wheel", onWheel, { passive: false });
		window.addEventListener("touchstart", onTouchStart, { passive: true });
		window.addEventListener("touchmove", onTouchMove, { passive: true });
		window.addEventListener("touchend", onTouchEnd, { passive: true });

		return () => {
			window.removeEventListener("wheel", onWheel);
			window.removeEventListener("touchstart", onTouchStart);
			window.removeEventListener("touchmove", onTouchMove);
			window.removeEventListener("touchend", onTouchEnd);
		};
	}, [index]);

	const scrollRef = useRef<HTMLDivElement>(null);
	const scrollProgress = index / (SCREENS.length - 1);

	return (
		<motion.div className="w-dvw h-screen overflow-hidden relative">
			<motion.div
				id="scroll-indicator"
				className="fixed top-0 left-0 right-0 h-2 bg-black z-50"
				animate={{ scaleX: scrollProgress }}
				style={{ originX: 0 }}
				transition={{
					duration: 0.75,
					ease: [0.65, 0, 0.35, 1],
				}}
			/>
			<motion.div
				ref={scrollRef}
				animate={{ y: `-${index * 100}vh` }}
				transition={{
					duration: 0.75,
					ease: [0.65, 0, 0.35, 1],
				}}
				className="w-screen">
				{SCREENS.map((Screen, i) => (
					<div key={i} className="w-screen h-screen">
						<Screen />
					</div>
				))}
			</motion.div>
			<Monogramme index={index} setIndex={setIndex} full={index === 2} />
		</motion.div>
	);
}
