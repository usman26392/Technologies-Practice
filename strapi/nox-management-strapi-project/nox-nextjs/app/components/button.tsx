import Image from "next/image";
import Link from "next/link";

// generic button component
type ButtonProps = {
	title: string;
	targetValue?: string;
	btnElement?: boolean;
};

export default function Button({ title, targetValue, btnElement }: ButtonProps) {
	return btnElement ? (
		<button
			type="submit"
			className="group/icon relative inline-flex cursor-pointer select-none items-center justify-center gap-[0.6em] rounded-full border-2 border-solid border-white bg-transparent p-[.8em_1.99em] text-center align-middle font-gotham text-xs capitalize leading-none no-underline outline-none transition hover:border-transparent hover:bg-brown">
			{title}
			<span className="pointer-events-none relative flex h-[0.9em] w-[1.4em] shrink-0 grow-0 basis-[1.4em] items-center justify-center overflow-hidden transition">
				<Image
					src="/svgs/btn-icon.svg"
					alt="icon"
					width={18}
					height={16}
					className="transition group-hover/icon:opacity-0"
				/>
				<Image
					src="/svgs/btn-icon-lg.svg"
					alt="icon"
					width={29}
					height={16}
					className="absolute right-0 top-0 opacity-0 transition group-hover/icon:opacity-100"
				/>
			</span>
		</button>
	) : (
		<Link
			href="?!"
			className="group/icon relative inline-flex cursor-pointer select-none items-center justify-center gap-[0.6em] rounded-full border-2 border-solid border-white bg-transparent p-[.8em_1.99em] text-center align-middle font-gotham text-xs capitalize leading-none no-underline outline-none transition hover:border-transparent hover:bg-brown"
			target={targetValue ? "_blank" : "_self"}>
			{title}
			<span className="pointer-events-none relative flex h-[0.9em] w-[1.4em] shrink-0 grow-0 basis-[1.4em] items-center justify-center overflow-hidden transition">
				<Image
					src="/svgs/btn-icon.svg"
					alt="icon"
					width={18}
					height={16}
					className="transition group-hover/icon:opacity-0"
				/>
				<Image
					src="/svgs/btn-icon-lg.svg"
					alt="icon"
					width={29}
					height={16}
					className="absolute right-0 top-0 opacity-0 transition group-hover/icon:opacity-100"
				/>
			</span>
		</Link>
	);
}


// Connect Button component
type ButtonConnectProps = {
	title: string;
	targetValue?: string;

}

export function ButtonConnect({title, targetValue}:ButtonConnectProps) {
	return (
		<Link
			href="?!"
			className="group/icon group/linkedin-icon relative inline-flex cursor-pointer select-none items-center justify-center gap-[0.6em] rounded-xl border-2 border-solid border-gray-dark2 bg-black3 p-[.8em_1em] text-center align-middle font-gotham text-[1.125rem] capitalize leading-none no-underline outline-none transition hover:border-transparent hover:bg-brown"
			target={targetValue ? "_blank" : "_self"}>
			{title}
			<span>
				<Image src="/svgs/linkedin-icon.svg" alt="linkedin icon" width={81} height={21} />
			</span>
			<span className="pointer-events-none relative flex h-[1.11111em] w-[1.11111em] shrink-0 grow-0 basis-[1.11111em] items-center justify-center overflow-hidden rounded-full border border-solid border-transparent bg-brown transition group-hover/linkedin-icon:border-white">
				<Image src="/svgs/right-sm-arrow.svg" alt="icon arrow" width={9} height={8} />
			</span>
		</Link>
	);
}
