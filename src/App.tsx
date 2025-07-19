import viteSvgLogo from "/logo/vite.svg";
// import viteWebpLogo from "/vite.webp";
// import viteAvifLogo from "/vite.avif";
// import vitePngLogo from "/vite.png";
import questSVG from "/icon/quest.svg";
import quest24Png from "/icon/quest_24.png";
import quest148Png from "/icon/quest_148.png";
// import questBrowser24 from "/icon/browser_24.png";
// import quest148x24TinifyPng from "/icon/quest_148_tinify_24.png";
// import quest148x24TinifyWebp from "/icon/quest_148_tinify_24.webp";
// import quest148x24TinifyAvif from "/icon/quest_148_tinify_24.avif";
import "./App.css";

const IMAGE_TYPES = [
	{ type: "SVG", src: questSVG, alt: "quest", width: 24, height: 24, },
	{ type: "Minified PNG", src: quest24Png, alt: "quest", width: 24, height: 24,  },
	{ type: "PNG 148 => 24", src: quest148Png, alt: "quest", width: 24, height: 24,  },
	// { type: "Browser PNG", src: questBrowser24, alt: "quest", width: 24, height: 24,  },
	// { type: "Minified PNG 148 => 24", src: quest148x24TinifyPng, alt: "quest", width: 24, height: 24,  },
	// { type: "WEBP", src: quest148x24TinifyWebp, alt: "webp", width: 24, height: 24,  },
	// { type: "AVIF", src: quest148x24TinifyAvif, alt: "avif", width: 24, height: 24,  },
];

const VITE_IMAGE_TYPES = [
	{ type: "SVG", src: viteSvgLogo, alt: "logo", width: 24, height: 24, },
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
			<table>
				<thead>
					<tr>
						<th scope="col">Image type</th>
						<th scope="col">Image dimension</th>
						<th scope="col">Image</th>
					</tr>
				</thead>
				<tbody>
					{IMAGE_TYPES.map((image,index) => (
						<tr key={index}>
							<th scope="row">{image.type}</th>
							<td>{image.width}x{image.height}</td>
							<td>
								<img src={image.src} alt={image.alt} height={image.height} width={image.width} />
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<article>Using an SVG from vite</article>
			<table>
				<thead>
					<tr>
						<th scope="col">Image type</th>
						<th scope="col">Image dimension</th>
						<th scope="col">Image</th>
					</tr>
				</thead>
				<tbody>
					{VITE_IMAGE_TYPES.map((image,index) => (
						<tr key={index}>
							<th scope="row">{image.type}</th>
							<td>{image.width}x{image.height}</td>
							<td>
								<img src={image.src} alt={image.alt} height={image.height} width={image.width} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default App;
