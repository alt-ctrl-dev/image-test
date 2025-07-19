import viteSvgLogo from "/logo/vite.svg";
// import viteWebpLogo from "/vite.webp";
// import viteAvifLogo from "/vite.avif";
// import vitePngLogo from "/vite.png";
import questSVG from "/icon/quest.svg";
// import questBrowser24 from "/icon/browser_24.png";
// import quest148x24TinifyPng from "/icon/quest_148_tinify_24.png";
// import quest148x24TinifyWebp from "/icon/quest_148_tinify_24.webp";
// import quest148x24TinifyAvif from "/icon/quest_148_tinify_24.avif";
import "./App.css";
import type { ImageRow } from "./Table";
import Table from "./Table";

const IMAGE_TYPES: ImageRow[] = [
	{ type: "SVG", src: questSVG, alt: "quest", width: 24, height: 24, fileSize: "4kb" },
];

const VITE_IMAGE_TYPES: ImageRow[] = [
	{ type: "SVG", src: viteSvgLogo, alt: "logo", width: 24, height: 24, fileSize: "1kb" },
];
function App() {
	return (
		<>
			<hgroup>
				<h1>Image test</h1>
				<p>How different images work with compression on a Website?</p>
			</hgroup>
			<hr />

			<article>Using an SVG from figma</article>
			<Table images={IMAGE_TYPES} tableKey="figma" />
			<br/>
			<br/>
			<article>Using an SVG from vite</article>
			<Table images={VITE_IMAGE_TYPES} tableKey="vite" />
		</>
	);
}

export default App;
