"use client";

import Image from "next/image";
import { ButtonConnect } from "./button";
import Link from "next/link";
import { IGeneralData } from "./header";
import { STRAPI_URL } from "../lib/data";

export default function Footer({
	logoUrl,
	footerDescription,
	footerNavigation,
	getInTouch,
	footerCta,
}: IGeneralData) {
	console.log("footer component rendered");
	// console.log("get in touch Datas", getInTouch);

	// console.log(footerNavigation)

	// console.log("cta", footerCta)

	return (
		<footer className="bg-black2 pt-7 md:pt-11 xl:pt-28">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-12">
					<div className="mb-7 text-center md:col-span-12 xl:col-span-3 xl:pr-16 xl:text-left">
						<Link
							href="?!"
							className="relative mx-auto block h-[6.4375rem] max-w-[17.5rem] xl:mx-0">
							<Image
								src={`${STRAPI_URL}${logoUrl || ""}`}
								alt="logo"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
							/>
						</Link>
						{footerDescription && <p>{footerDescription}</p>}
					</div>
					{(footerNavigation ?? []).length > 0 &&
						(footerNavigation ?? [])?.map((navItems, idx) => (
							<div className="md:col-span-6 lg:col-span-4 xl:col-span-3" key={idx}>
								<h4 className="mb-4">{navItems?.title}</h4>
								<ul className="mb-7 inline-block list-none pl-0">
									{navItems?.Important_Links?.map((link, idx) => (
										<li className="group/anim-line relative" key={idx}>
											<Link href={link?.link_url || "/"}>{link?.link_title}</Link>
											<span
												aria-hidden="true"
												className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
										</li>
									))}
								</ul>
							</div>
						))}

					{/* get in touch */}
					<div className="md:col-span-6 lg:col-span-4 xl:col-span-3">
						<h4 className="mb-4">{getInTouch?.Get_in_Title}</h4>
						<ul className="mb-7 list-none pl-0">
							<li>
								<Link
									href={`${getInTouch?.Number_Url || ""}`}
									className="flex items-baseline gap-3 transition hover:text-brown">
									<span className="h-3 w-3 shrink-0 basis-3 xl:h-4 xl:w-4 xl:basis-4 3xl:h-5 3xl:w-5 3xl:basis-5">
										<img src="/svgs/call.svg" alt="call" width="18" height="18" />
									</span>
									{getInTouch?.Number_Url || ""}
								</Link>
							</li>
							<li>
								<span className="items-ba9seline flex gap-3">
									<span className="h-3 w-3 shrink-0 basis-3 xl:h-4 xl:w-4 xl:basis-4 3xl:h-5 3xl:w-5 3xl:basis-5">
										<img src="/svgs/mail.svg" alt="call" width="18" height="18" />
									</span>
									<span className="*:block">
										{(getInTouch?.Emails ?? []).length > 0 &&
											getInTouch?.Emails?.map((email, idx) => (
												<Link
													href={`mailto:${email?.Email_One}`}
													key={idx}
													className="transition hover:text-brown">
													{email?.Email_One}
												</Link>
											))}
										{(getInTouch?.Emails ?? []).length > 0 &&
											getInTouch?.Emails?.map((email, idx) => (
												<Link
													href={`mailto:${email?.Email_Two}`}
													key={idx}
													className="transition hover:text-brown">
													{email?.Email_Two}
												</Link>
											))}
									</span>
								</span>
							</li>
							<li>
								<Link
									href="?!"
									className="flex items-baseline gap-3 transition hover:text-brown">
									<span className="h-3 w-3 shrink-0 basis-3 xl:h-4 xl:w-4 xl:basis-4 3xl:h-5 3xl:w-5 3xl:basis-5">
										<img src="/svgs/location.svg" alt="location" width="18" height="18" />
									</span>
									{getInTouch?.Address_Url || ""}
								</Link>
							</li>
						</ul>
						<ButtonConnect
							title="Connect to"
							targetValue="blank"
							LinkedIn_Url={getInTouch?.LinkedIn_Url || ""}
						/>
					</div>
				</div>
			</div>
			<div className="mt-6 border-t-2 border-solid border-t-white/15 py-4">
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
						<div className="text-center md:text-left">
							<p className="mb-1 md:mb-0">
								{footerCta?.Copy_Right_Text}
							</p>
						</div>
						<div>
							<ul className="mb-2 mt-3 flex list-none justify-center gap-4 pl-0 *:mb-0 md:m-0 md:justify-end">
								
								{
									footerCta?.Footer_Links_Urls?.map((link, idx)=> (
										<li className="group/anim-line relative" key={link?.title || idx}>
											<Link href={link?.url || ""}>{link?.title} </Link>
											<span
												aria-hidden="true"
												className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
										</li>

									))
								}
								{/* <li className="group/anim-line relative">
									<Link href="?!">Terms and Conditions</Link>
									<span
										aria-hidden="true"
										className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
								</li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
