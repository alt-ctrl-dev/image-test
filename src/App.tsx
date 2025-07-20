import viteSvgLogo from "/logo/vite.svg";
import vite32MinAvifLogo from "/logo/vite-32-min.avif";
import vite32OgAvifLogo from "/logo/vite-32-og.avif";
import vite32MinPngLogo from "/logo/vite-32-min.png";
import vite32OgPngLogo from "/logo/vite-32-og.png";
import vite32MinWeboLogo from "/logo/vite-32-min.webp";
import vite32OgWebpLogo from "/logo/vite-32-og.webp";
import questOgSVG from "/icon/quest-og.svg";
import questMinSVG from "/icon/quest-min.svg";
import quest32MinAvifLogo from "/icon/quest-32-min.avif";
import quest32OgAvifLogo from "/icon/quest-32-og.avif";
import quest32MinPngLogo from "/icon/quest-32-min.png";
import quest32OgPngLogo from "/icon/quest-32-og.png";
import quest32MinWeboLogo from "/icon/quest-32-min.webp";
import quest32OgWebpLogo from "/icon/quest-32-og.webp";
import "./App.css";
import type { ImageRow } from "./Table";
import Table from "./Table";

const LOGO_IMAGE_TYPES: ImageRow[] = [
	{ type: "32x32 Minified PNG => AVIF", src: quest32MinAvifLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1*1024 },
	{ type: "32x32  OG PNG => AVIF", src: quest32OgAvifLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1*1024 },
	{ type: "32x32 Minified PNG", src: quest32MinPngLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 981 },
	{ type: "32x32  OG PNG", src: quest32OgPngLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 2*1024 },
	{ type: "SVG Min", src: questMinSVG, alt: "logo", width: 32, height: 32, fileSizeInByte: 2*1024 },
	{ type: "SVG OG", src: questOgSVG, alt: "logo", width: 32, height: 32, fileSizeInByte: 2*1024 },
	{ type: "32x32 Minified PNG => WEBP", src: quest32MinWeboLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 570 },
	{ type: "32x32  OG PNG => WEBP", src: quest32OgWebpLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 680 },
]
.sort((a, b) => (a.fileSizeInByte - b.fileSizeInByte));

const VITE_IMAGE_TYPES: ImageRow[] = [
	{ type: "32x32 Minified PNG => AVIF", src: vite32MinAvifLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1*1024 },
	{ type: "32x32  OG PNG => AVIF", src: vite32OgAvifLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1*1024 },
	{ type: "32x32 Minified PNG", src: vite32MinPngLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 2*1024 },
	{ type: "32x32  OG PNG", src: vite32OgPngLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 3*1024 },
	{ type: "SVG", src: viteSvgLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1*1024 },
	{ type: "32x32 Minified PNG => WEBP", src: vite32MinWeboLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 754 },
	{ type: "32x32  OG PNG => WEBP", src: vite32OgWebpLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 866 },
]
.sort((a, b) => (a.fileSizeInByte - b.fileSizeInByte));


function App() {
	return (
		<>
			<hgroup>
				<h1>Image test</h1>
				<p>How different images work with compression on a Website?</p>
			</hgroup>
			<hr />

			<article>Using an SVG from figma</article>
			<Table images={LOGO_IMAGE_TYPES} tableKey="figma" />
			<br/>
			<br/>
			<article>Using an SVG from vite</article>
			<Table images={VITE_IMAGE_TYPES} tableKey="vite" />
		</>
	);
}

export default App;
