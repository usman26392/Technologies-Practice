import Image from "next/image";
import { STRAPI_URL } from "../lib/data";

type PartnerlogoProps = {
	Brand__Logo__white?: {
		url?: string | undefined;
	};
	Brand__logo__color?: {
		url?: string | undefined;
	};
};

export default function Partnerlogo( {Brand__Logo__white, Brand__logo__color} : PartnerlogoProps) {

	// console.log("first", brandLogo);
	
	return (
		<div className="group/brand-logo relative z-1">
			{/* white logo */}
			<Image
				src={`${STRAPI_URL}${Brand__Logo__white?.url || ""}`}
				alt="brand logo"
				width={272}
				height={116}
				className="pointer-events-none h-28 w-auto"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
			/>
			{/* color logo */}
			<Image
				src={`${STRAPI_URL}${Brand__logo__color?.url || ""}`}
				alt="brand logo"
				width={272}
				height={116}
				className="absolute left-0 top-0 z-1 h-28 w-auto opacity-0 transition duration-500 group-hover/brand-logo:opacity-100"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
			/>
		</div>
	);
}
