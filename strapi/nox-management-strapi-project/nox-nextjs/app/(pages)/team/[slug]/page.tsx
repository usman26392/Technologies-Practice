import Innerhero from "@/app/components/inner-hero";
import { getTeamDataDetails, STRAPI_URL } from "@/app/lib/data";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	// fetch slug from the page component
	// console.log(await params);

	const { slug } = await params;
	console.log("slugs", slug);

	const specificTeamDetailData = await getTeamDataDetails(slug);
	// console.log("team detail object", specificTeamDetailData);

	const url = specificTeamDetailData?.Figure_sm?.url;
	const personName = specificTeamDetailData?.personName;
	const personDesignation = specificTeamDetailData?.personDesignation;
	const description = specificTeamDetailData?.description;

	// console.log("large image", url);

	return (
		<section>
			<Innerhero />
			<div className="container">
				<div className="grid grid-cols-1 items-center gap-y-10 md:gap-y-0 gap-x-48 py-8 md:grid-cols-2 xl:py-32">
					<div className="relative h-0 w-full pb-[100%]">
						{url && (
							<Image
								src={`${STRAPI_URL}${url}`}
								alt={personName ? personName : ""}
								className="figure-grayscale h-auto w-full"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						)}
					</div>
					<div className="">
						{personName && <h2 className="">{personName}</h2>}
						{personDesignation && <p className="">{personDesignation} </p>}
						{description && <p className="">{description}</p>}
					</div>
				</div>
			</div>
		</section>
	);
}
