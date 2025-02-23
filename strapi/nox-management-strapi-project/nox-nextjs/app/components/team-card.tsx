import Image from "next/image";

type TeamcardProps = {
	url: string;
	personName: string;
	personDesignation: string;
};

export default function Teamcard({ url, personName, personDesignation }: TeamcardProps) {
	return (
		<div className="group/team-card block text-center">
			<div className="relative mx-auto mb-[2.1875em] h-[26.25em] w-[26.25em] overflow-hidden rounded-full bg-brown transition">
				<Image
					src={url}
					alt="Team member"
					className="object-cover transition duration-500 group-hover/team-card:scale-105"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
				/>
			</div>
			{personName && <h4>{personName}</h4>}
			{personDesignation && <h3 className="text-md text-brown">{personDesignation}</h3>}
		</div>
	);
}
