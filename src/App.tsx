import viteSvgLogo from "/logo/vite.svg";
import vite32MinAvifLogo from "/logo/vite-32-min.avif";
import vite32OgAvifLogo from "/logo/vite-32-og.avif";
import vite256MinAvifLogo from "/logo/vite-256-min.avif";
import vite256OgAvifLogo from "/logo/vite-256-og.avif";
import vite32MinPngLogo from "/logo/vite-32-min.png";
import vite32OgPngLogo from "/logo/vite-32-og.png";
import vite256MinPngLogo from "/logo/vite-256-min.png";
import vite256OgPngLogo from "/logo/vite-256-og.png";
import vite32MinWeboLogo from "/logo/vite-32-min.webp";
import vite32OgWebpLogo from "/logo/vite-32-og.webp";
import vite256MinWebpLogo from "/logo/vite-256-min.webp";
import vite256OgWebpLogo from "/logo/vite-256-og.webp";
import questSVG from "/icon/quest.svg";
import "./App.css";
import type { ImageRow } from "./Table";
import Table from "./Table";

const IMAGE_TYPES: ImageRow[] = [
	{ type: "SVG", src: questSVG, alt: "quest", width: 24, height: 24, fileSizeInByte: 4*1024 },
].sort((a, b) => (a.fileSizeInByte - b.fileSizeInByte));

const VITE_IMAGE_TYPES: ImageRow[] = [
	{ type: "SVG", src: viteSvgLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1*1024 },
	{ type: "32x32 Minified PNG => AVIF", src: vite32MinAvifLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1*1024 },
	{ type: "32x32  OG PNG => AVIF", src: vite32OgAvifLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 1*1024 },
	{ type: "256x256 Minified PNG => AVIF", src: vite256MinAvifLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 4*1024 },
	{ type: "256x256 OG PNG => AVIF", src: vite256OgAvifLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 4*1024 },
	{ type: "32x32 Minified PNG", src: vite32MinPngLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 2*1024 },
	{ type: "32x32  OG PNG", src: vite32OgPngLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 3*1024 },
	{ type: "256x256 Minified PNG", src: vite256MinPngLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 6*1024 },
	{ type: "256x256 OG PNG", src: vite256OgPngLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 18*1024 },
	{ type: "32x32 Minified PNG => WEBP", src: vite32MinWeboLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 754 },
	{ type: "32x32  OG PNG => WEBP", src: vite32OgWebpLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 866 },
	{ type: "256x256 Minified PNG => WEBP", src: vite256MinWebpLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 4*1024 },
	{ type: "256x256 OG PNG => WEBP", src: vite256OgWebpLogo, alt: "logo", width: 32, height: 32, fileSizeInByte: 4*1024 },

].sort((a, b) => (a.fileSizeInByte - b.fileSizeInByte));
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
