import Image from "next/image";


type PartnerlogoProps = {
    whiteLogoUrl: string;
    colorLogoUrl: string;

}

export default function Partnerlogo({whiteLogoUrl, colorLogoUrl}:PartnerlogoProps) {
	return (
		<div className="z-1 group/brand-logo relative">
            {/* white logo */}
			<Image
				src={whiteLogoUrl}
				alt="brand logo"
				width={272}
				height={116}
				className="pointer-events-none h-28 w-auto"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
			/>
            {/* color logo */}
			<Image
				src={colorLogoUrl}
				alt="brand logo"
				width={272}
				height={116}
				className="z-1 absolute left-0 top-0 h-28 w-auto opacity-0 transition duration-500 group-hover/brand-logo:opacity-100"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
			/>
		</div>
	);
}
