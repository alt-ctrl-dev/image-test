import viteOgSvgLogo from "/logo/vite-og.svg";
import vite32MinAvifLogo from "/logo/vite-32-min.avif";
import vite32OgAvifLogo from "/logo/vite-32-og.avif";
import vite32MinPngLogo from "/logo/vite-32-min.png";
import vite32OgPngLogo from "/logo/vite-32-og.png";
import vite32MinWeboLogo from "/logo/vite-32-min.webp";
import vite32OgWebpLogo from "/logo/vite-32-og.webp";
import vite32OgWebpSquooshedLogo from "/logo/vite-32-og-squooshed.webp";
import questOgSVG from "/icon/quest-og.svg";
import quest32MinAvifLogo from "/icon/quest-32-min.avif";
import quest32OgAvifLogo from "/icon/quest-32-og.avif";
import quest32MinPngLogo from "/icon/quest-32-min.png";
import quest32OgPngLogo from "/icon/quest-32-og.png";
import quest32MinWeboLogo from "/icon/quest-32-min.webp";
import quest32OgWebpLogo from "/icon/quest-32-og.webp";
import quest32OgWebpSquooshedLogo from "/icon/quest-32-og-squooshed.webp";
import { lazy } from "react";
import type { ImageRow } from "./components/TableRow";
const Table = lazy(() => import("./components/Table"));

const LOGO_IMAGE_TYPES: ImageRow[] = [
	{ type: "Minified PNG => AVIF", src: quest32MinAvifLogo, alt: "logo" , width: 19,height: 32, fileSizeInByte: 1001 },
	{ type: "OG PNG => AVIF", src: quest32OgAvifLogo, alt: "logo" , width: 19,height: 32, fileSizeInByte: 1051 },
	{ type: "Minified PNG", src: quest32MinPngLogo, alt: "logo" , width: 19,height: 32, fileSizeInByte: 981 },
	{ type: "OG PNG", src: quest32OgPngLogo, alt: "logo",width: 19, height: 32, fileSizeInByte: 1898 },
	{ type: "SVG", src: questOgSVG, alt: "logo", width: 19,height: 32, fileSizeInByte: 2413 },
	{ type: "Minified PNG => WEBP", src: quest32MinWeboLogo, alt: "logo", width: 19,height: 32, fileSizeInByte: 570 },
	{ type: "OG PNG => WEBP", src: quest32OgWebpLogo, alt: "logo", width: 19,height: 32, fileSizeInByte: 680 },
	{ type: "OG PNG => WEBP (squooshed lossless 9)", src: quest32OgWebpSquooshedLogo, alt: "logo", width: 19,height: 32, fileSizeInByte: 976 },
]
.sort((a, b) => (a.fileSizeInByte - b.fileSizeInByte));

const VITE_IMAGE_TYPES: ImageRow[] = [
	{ type: "Minified PNG => AVIF", src: vite32MinAvifLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1239 },
	{ type: "OG PNG => AVIF", src: vite32OgAvifLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1333 },
	{ type: "Minified PNG", src: vite32MinPngLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1621 },
	{ type: "OG PNG", src: vite32OgPngLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 2830 },
	{ type: "SVG", src: viteOgSvgLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1497 },
	{ type: "Minified PNG => WEBP", src: vite32MinWeboLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 754 },
	{ type: "OG PNG => WEBP (squooshed lossless 9)", src: vite32OgWebpSquooshedLogo, alt: "logo", width: 32,height: 32, fileSizeInByte: 1860 },
	{ type: "OG PNG => WEBP", src: vite32OgWebpLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 866 },
]
.sort((a, b) => (a.fileSizeInByte - b.fileSizeInByte));


function App() {
	return (
		<>
			<hgroup>
				<h1>Image test</h1>
				<p>How different images work with compression on a SPA</p>
			</hgroup>
			<hr />

			<article><strong>Using an SVG from <mark>figma</mark></strong></article>
			<Table images={LOGO_IMAGE_TYPES} tableKey="figma" />
			<br/>
			<br/>
			<article><strong>Using an SVG using <mark>minimun strokes</mark></strong></article>
			<Table images={VITE_IMAGE_TYPES} tableKey="vite" />
		</>
	);
}

export default App;
