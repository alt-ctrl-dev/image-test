import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import questSVG from "/icon/quest.svg";
import quest24Png from "/icon/quest_24.png";
import quest148Png from "/icon/quest_148.png";
import questBrowser24 from "/icon/browser_24.png";
import quest148x24TinifyPng from "/icon/quest_148_tinify_24.png";
import quest148x24TinifyWebp from "/icon/quest_148_tinify_24.webp";
import quest148x24TinifyAvif from "/icon/quest_148_tinify_24.avif";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vite.dev" rel="noopener" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" rel="noopener" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
			<div className="flex">
				<img src={questSVG} alt="quest" height="24" width="24" />
				<img src={quest24Png} alt="quest" height="24" width="24" />
				<img src={quest148Png} alt="quest" height="24" width="24" />
				<img src={questBrowser24} alt="quest" height="24" width="24" />
				<img src={quest148x24TinifyPng} alt="png" height="24" width="24" />
				<img src={quest148x24TinifyWebp} alt="webp" height="24" width="24" />
				<img src={quest148x24TinifyAvif} alt="avif" height="24" width="24" />
			</div>
		</>
	);
}

export default App;
