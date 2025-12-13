import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ScreenManager } from "./components/screen-manager";
import { StageIn } from "./components/stage-in";

function App() {
	const [showStageIn, setShowStageIn] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => setShowStageIn(false), 1800);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			<AnimatePresence>
				{showStageIn && <StageIn isVisible={showStageIn} />}
			</AnimatePresence>
			{!showStageIn && <ScreenManager />}
		</>
	);
}

export default App;
