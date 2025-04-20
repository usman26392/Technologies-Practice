import Innerhero from "@/app/components/inner-hero";
import { getTeamDetails } from "@/app/lib/data";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	// fetch slug from the page component
	// console.log(await params);

	const { slug } = await params;

	const specificTeamDetailData = await getTeamDetails(slug);
	// console.log(specificTeamDetailData)

	const url = specificTeamDetailData?.url;
	const personName = specificTeamDetailData?.personName;
	const personDesignation = specificTeamDetailData?.personDesignation;
	const description = specificTeamDetailData?.description;

	return (
		<div>
			<Innerhero />
			{/* make two column layout with tailwind grid and responsive */}
			<div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
				<div className="flex items-center justify-center">
          {/* <Image/> */}
					<img
						src={specificTeamDetailData?.url}
						alt={specificTeamDetailData?.personName}
						className="h-auto w-full"
					/>
				</div>
				<div className="flex flex-col items-start justify-center p-4">
					<h2 className="text-2xl font-bold">{specificTeamDetailData?.personName}</h2>
					<p className="text-lg">{specificTeamDetailData?.personDesignation}</p>
					<p className="mt-4">{specificTeamDetailData?.description}</p>
				</div>
			</div>
		</div>
	);
}
