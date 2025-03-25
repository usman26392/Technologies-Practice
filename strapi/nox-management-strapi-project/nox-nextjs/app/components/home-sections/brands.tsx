import Partnerlogo from "../partner-logo";
import brandLogos from "../../data/brand-logo-list.json";

// console.log(brandLogos?.brandLogoList);

type BrandLogoProps = {
	title: string;
	bgColor?: "bg-gray-dark2" | "bg-gray-dark";
};

export default function Brands({ title, bgColor }: BrandLogoProps) {
	return (
		<section className={`py-8 ${bgColor} xl:py-24`}>
			<div className="container">
				{title && <h2>{title}</h2>}
				<div className="relative overflow-hidden rounded-2xl p-4 md:p-6 xl:px-36">
					<div className="absolute inset-0 bg-gradient-to-r from-gray-dark"></div>
					<div className="grid grid-cols-3 justify-items-center gap-11 lg:grid-cols-4">
						{brandLogos?.brandLogoList.map((brandLogo, index) => (
							<div key={index} className="xl:[&:nth-child(8n+1)]:pl-[6.25rem]">
								<Partnerlogo {...brandLogo} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
