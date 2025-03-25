"use client";

import Image from "next/image";
import { ButtonConnect } from "./button";
import Link from "next/link";

// type FooterProps = {};

export default function Footer() {
	return (
		<footer className="bg-black2 pt-7 md:pt-11 xl:pt-28">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-12">
					<div className="mb-7 text-center md:col-span-12 xl:col-span-3 xl:pr-16 xl:text-left">
						<Link href="?!" className="relative mx-auto block h-[6.4375rem] max-w-[17.5rem] xl:mx-0">
							<Image
								src="/svgs/logo.svg"
								alt="logo"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
							/>
						</Link>
						<p>Approaching exciting opportunities with a fresh ideology</p>
					</div>
					<div className="md:col-span-6 lg:col-span-4 xl:col-span-3">
						<h4 className="mb-4">Important Links</h4>
						<ul className="mb-7 inline-block list-none pl-0">
							<li className="group/anim-line relative">
								<Link href="?!">Home</Link>
								<span
									aria-hidden="true"
									className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
							</li>
							<li className="group/anim-line relative">
								<Link href="?!">Home</Link>
								<span
									aria-hidden="true"
									className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
							</li>
							<li className="group/anim-line relative">
								<Link href="?!">Home</Link>
								<span
									aria-hidden="true"
									className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
							</li>
							<li className="group/anim-line relative">
								<Link href="?!">Home</Link>
								<span
									aria-hidden="true"
									className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
							</li>
						</ul>
					</div>
					<div className="md:col-span-6 lg:col-span-4 xl:col-span-3">
						<h4 className="mb-4">Important Links</h4>
						<ul className="mb-7 inline-block list-none pl-0">
							<li className="group/anim-line relative">
								<Link href="?!">Home</Link>
								<span
									aria-hidden="true"
									className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
							</li>
							<li className="group/anim-line relative">
								<Link href="?!">Home</Link>
								<span
									aria-hidden="true"
									className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
							</li>
							<li className="group/anim-line relative">
								<Link href="?!">Home</Link>
								<span
									aria-hidden="true"
									className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
							</li>
							<li className="group/anim-line relative">
								<Link href="?!">Home</Link>
								<span
									aria-hidden="true"
									className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
							</li>
						</ul>
					</div>
					<div className="md:col-span-6 lg:col-span-4 xl:col-span-3">
						<h4 className="mb-4">Get In Touch</h4>
						<ul className="mb-7 list-none pl-0">
							<li>
								<Link
									href="tel:96522062310"
									className="flex items-baseline gap-3 transition hover:text-brown">
									<span className="h-3 w-3 shrink-0 basis-3 xl:h-4 xl:w-4 xl:basis-4 3xl:h-5 3xl:w-5 3xl:basis-5">
										<img src="/svgs/call.svg" alt="call" width="18" height="18" />
									</span>
									96522062310
								</Link>
							</li>
							<li>
								<span className="flex items-baseline gap-3">
									<span className="h-3 w-3 shrink-0 basis-3 xl:h-4 xl:w-4 xl:basis-4 3xl:h-5 3xl:w-5 3xl:basis-5">
										<img src="/svgs/mail.svg" alt="call" width="18" height="18" />
									</span>
									<span className="*:block">
										<Link href="mailto:info@noxmanagement.com" className="transition hover:text-brown">
											info@noxmanagement.com
										</Link>
										<Link
											href="mailto:careers@noxmanagement.com"
											className="transition hover:text-brown">
											careers@noxmanagement.com
										</Link>
									</span>
								</span>
							</li>
							<li>
								<Link href="?!" className="flex items-baseline gap-3 transition hover:text-brown">
									<span className="h-3 w-3 shrink-0 basis-3 xl:h-4 xl:w-4 xl:basis-4 3xl:h-5 3xl:w-5 3xl:basis-5">
										<img src="/svgs/location.svg" alt="location" width="18" height="18" />
									</span>
									Kuwait City, Mohammad Thunayyan Street , Salhiya Commercial Complex , Gate 1, 5th
									Floor
								</Link>
							</li>
						</ul>
						<ButtonConnect title="Connect to" targetValue="blank" />
					</div>
				</div>
			</div>
			<div className="mt-6 border-t-2 border-solid border-t-white/15 py-4">
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
						<div className="text-center md:text-left">
							<p className="mb-1 md:mb-0">
								Copyright © 2024 <strong>NOX Management</strong>{" "}
							</p>
						</div>
						<div>
							<ul className="mb-2 mt-3 flex list-none justify-center gap-4 pl-0 *:mb-0 md:m-0 md:justify-end">
								<li className="group/anim-line relative">
									<Link href="?!">Privacy Policy</Link>
									<span
										aria-hidden="true"
										className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
								</li>
								<li className="group/anim-line relative">
									<Link href="?!">Terms and Conditions</Link>
									<span
										aria-hidden="true"
										className="absolute bottom-[-0.19rem] left-0 h-0.5 w-full origin-left scale-x-0 bg-white transition duration-500 group-hover/anim-line:scale-100"></span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
