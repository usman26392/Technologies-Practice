"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define the type for the data
export interface IGeneralData {
	privacyTitle?: string;
	privacyUrl?: string;
	headerCta?: {
		title?: string;
		url?: string;
		tagLine?: string;
	}[];
	logoUrl?: string | undefined;
	headerNavigation?: {
		title?: string;
		url?: string;
	}[];
	BannerVideo?: string;
	footerDescription?: string;
	footerNavigation?: {
		title?: string;
		links?: {
			title?: string;
			url?: string;
		}[];
	}[];
	getInTouch?: {
		numberUrl?: string;
		emails?: string[];
		addressUrl?: string;
		linkedIn?: string;
	};
	footerCta?: {
		copyRightText?: string;
		linksUrls?: {
			title?: string;
			url?: string;
		}[];
	};
}

const getIconForCta = (cta: { url?: string; tagLine?: string }): string => {
	if (cta.tagLine?.includes("telephone")) {
		return "/svgs/call.svg"; // Icon for phone
	} else if (cta.tagLine?.includes("email")) {
		return "/svgs/mail.svg"; // Icon for email
	} else {
		return "/svgs/call.svg"; // Default icon
	}
};



// Component to render the header
export default function Header({
	privacyTitle,
	privacyUrl,
	headerCta,
	logoUrl,
	headerNavigation,
}: IGeneralData) {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
	const [isBelow1200px, setIsBelow1200px] = useState<boolean>(false);

	// Function to toggle the menu
	function toggleMenu() {
		if (isBelow1200px) {
			setIsOpenMenu((prevState) => !prevState);
		}
	}

	// Effect to track screen width and update `isBelow1200px`
	useEffect(() => {
		function handleResize() {
			setIsBelow1200px(window.innerWidth < 1200);
			// console.log("executing");
		}

		//   initial call/ check
		handleResize();

		// Add event listener for window resize
		window.addEventListener("resize", handleResize);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	console.log("header component rendered");

	return (
		<header>
			<div className="border-b border-gray-light py-4">
				<div className="container">
					<div className="flex items-center justify-between">
						<div className="group/anim-line relative">
							{privacyUrl && privacyTitle && (
								<Link href={privacyUrl} className="font-normal">
									{privacyTitle}
								</Link>
							)}
							<span
								aria-hidden="true"
								className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
						</div>
						<ul className="m-0 flex list-none gap-6 p-0 text">
							{headerCta?.map((cta, idx: number) => (
								<li className="group/anim-line relative m-0" key={idx}>
									<Link href={`tel:${cta?.url}`} className="flex items-center gap-2">
										<span className="shrink-0">
											<img
												src={getIconForCta(cta)}
												alt="call"
												width={16}
												height={16}
												className="h-full w-full"
											/>
										</span>
										<span>{cta?.title}</span>
									</Link>
									<span
										aria-hidden="true"
										className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="flex items-center justify-between py-4">
					<div className="w-1/2">
						<Link href="/">
							<Image src={logoUrl || ""} alt="header logo" width={280} height={103} />
						</Link>
					</div>
					<nav
						className={`max-xl:fixed max-xl:inset-0 max-xl:z-8 max-xl:flex max-xl:h-screen max-xl:w-screen max-xl:flex-col max-xl:bg-black2 max-xl:p-[10rem_1.5rem] max-xl:transition-[left] max-xl:duration-1000 xl:ml-auto xl:mr-8 ${isOpenMenu ? "max-xl:left-0" : "max-xl:left-full"}`}>
						<ul className="m-0 list-none p-0 text-[1.428rem] xl:flex xl:gap-7">
							{(headerNavigation ?? []).length > 0 &&
								(headerNavigation ?? []).map((navItems, idx: number) => (
									<li
										className="group/anim-line max-xl:border-b max-xl:border-b-brown max-xl:py-4 xl:relative xl:mb-0"
										key={idx}>
										<Link href={navItems?.url || ""} onClick={toggleMenu}>
											{navItems?.title}
										</Link>
										{!isBelow1200px && (
											<span
												aria-hidden="true"
												className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 xl:group-hover/anim-line:scale-100"></span>
										)}
									</li>
								))}
						</ul>
					</nav>
					<div className="flex items-baseline gap-4">
						<div className="cursor-pointer">
							<Image src="/svgs/search.svg" alt="search" width={18} height={18} />
						</div>

						{isBelow1200px && (
							<div className="relative z-10 cursor-pointer" onClick={toggleMenu}>
								<Image
									src="/svgs/burger-menu-list.svg"
									alt="burger mennu list icon"
									width={20}
									height={20}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}
