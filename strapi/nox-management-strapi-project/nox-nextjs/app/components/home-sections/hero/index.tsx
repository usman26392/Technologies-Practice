import { STRAPI_URL } from "@/app/lib/data";

type HeroProps = {
	url?: string;
};

export default function Hero({ url }: HeroProps) {
	console.log("hero component rendered");
	return (
		<section className="relative z-1 h-screen w-screen overflow-hidden">
			<video
				playsInline
				autoPlay
				muted
				loop
				className="absolute left-2/4 top-1/2 z-1 h-[57.25vw] min-h-full w-[177.77777778vh] min-w-full max-w-[none] -translate-x-1/2 -translate-y-1/2 opacity-100">
				<source src={`${STRAPI_URL}${url ? url : ""}`} type="video/mp4" />
			</video>
		</section>
	);
}
