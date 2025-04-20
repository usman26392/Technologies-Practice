import Image from "next/image";
import Link from "next/link";

export interface TeamcardProps {
	id?: string;
	url?: string;
	personName?: string;
	personDesignation?: string;
}

export default function Teamcard({
	id,
	url,
	personName,
	personDesignation,
}: TeamcardProps) {
	// console.log("url", url);
	return (
		<div className="group/team-card relative block text-center">
			<div className="team-figure relative mx-auto mb-[2.1875rem] h-[17.2142rem] w-[17.2142rem] overflow-hidden rounded-full bg-brown transition md:h-[24.25rem] md:w-[24.25rem] xl:h-[26.25rem] xl:w-[26.25rem]">
				<Image
					src={url ?? "/"}
					alt="Team member"
					className="object-cover transition duration-500 group-hover/team-card:scale-105"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
				/>
			</div>
			{personName && <h4>{personName}</h4>}
			{personDesignation && <h3 className="text-md text-brown">{personDesignation}</h3>}
			<Link
				href={`/team/${id}`}
				className="z-1 after:absolute after:inset-0 after:bg-transparent"></Link>
		</div>
	);
}
