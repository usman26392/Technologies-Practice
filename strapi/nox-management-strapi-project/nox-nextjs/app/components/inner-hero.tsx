import Image from "next/image";

export default function Innerhero() {
	return (
		<section className="relative flex h-[37.5em] items-center justify-center">
			<span
				className="opacity-12 pointer-events-none absolute left-0 top-0 z-[2] h-full w-full"
				style={{
					background: "linear-gradient(to bottom,#181818 20.97%,#747474 44.6%)",
					mixBlendMode: "multiply",
					content: '""',
				}}></span>
			<div className="absolute bottom-0 left-0 right-0 top-0 z-[1]">
				<picture className="h-full">
					<source media="(min-width:576px)" srcSet="/images/heroes/discover.png" />
					<Image
						src="/images/heroes/discover-mob.png"
						alt="hero"
						className="figure-grayscale object-cover"
						priority={true}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</picture>
			</div>
		</section>
	);
}
