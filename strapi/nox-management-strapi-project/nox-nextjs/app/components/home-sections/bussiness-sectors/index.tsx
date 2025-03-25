"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/thumbs";
import "./index.scss";
import { Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";




export default function BussinessSectors() {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

	return (
		<section className="relative h-[40em] py-8 md:h-screen xl:py-24">
			<div className="container relative z-1">
				<h2>Business Sectors</h2>
			</div>
			{/* figure slider */}
			<div className="absolute inset-0 z-0">
				<Swiper
					spaceBetween={10}
					thumbs={{
						swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
					}}
					modules={[Thumbs]}
					className="h-full">
					<SwiperSlide>
						<div className="relative h-full">
							<div className="absolute inset-0 z-2 bg-gradient-to-r from-gray-dark opacity-55"></div>
							<div className="relative z-2 flex h-full items-end px-[3.90625%] pb-[15em] text-white">
								<ul className="-m-3 flex list-none p-0 text-center *:px-3">
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
								</ul>
							</div>
							<picture className="absolute inset-0 z-1">
								<source
									srcSet="/images/home/bussiness-sector.png"
									media="(min-width: 768px)"
									type="image/png"
									width="1920"
									height="1080"
								/>
								<Image
									src="/images/home/bussiness-sector-mob.png"
									alt="sectors"
									className="figure-grayscale h-full w-full object-cover"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</picture>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative h-full">
							<div className="absolute inset-0 z-2 bg-gradient-to-r from-gray-dark opacity-55"></div>
							<div className="relative z-2 flex h-full items-end px-[3.90625%] pb-[15em] text-white">
								<ul className="-m-3 flex list-none p-0 text-center *:px-3">
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
								</ul>
							</div>
							<picture className="absolute inset-0 z-1">
								<source
									srcSet="/images/home/bussiness-sector.png"
									media="(min-width: 768px)"
									type="image/png"
									width="1920"
									height="1080"
								/>
								<Image
									src="/images/home/bussiness-sector-mob.png"
									alt="sectors"
									className="figure-grayscale h-full w-full object-cover"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</picture>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative h-full">
							<div className="absolute inset-0 z-2 bg-gradient-to-r from-gray-dark opacity-55"></div>
							<div className="relative z-2 flex h-full items-end px-[3.90625%] pb-[15em] text-white">
								<ul className="-m-3 flex list-none p-0 text-center *:px-3">
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
								</ul>
							</div>
							<picture className="absolute inset-0 z-1">
								<source
									srcSet="/images/home/bussiness-sector.png"
									media="(min-width: 768px)"
									type="image/png"
									width="1920"
									height="1080"
								/>
								<Image
									src="/images/home/bussiness-sector-mob.png"
									alt="sectors"
									className="figure-grayscale h-full w-full object-cover"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</picture>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative h-full">
							<div className="absolute inset-0 z-2 bg-gradient-to-r from-gray-dark opacity-55"></div>
							<div className="relative z-2 flex h-full items-end px-[3.90625%] pb-[15em] text-white">
								<ul className="-m-3 flex list-none p-0 text-center *:px-3">
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
								</ul>
							</div>
							<picture className="absolute inset-0 z-1">
								<source
									srcSet="/images/home/bussiness-sector.png"
									media="(min-width: 768px)"
									type="image/png"
									width="1920"
									height="1080"
								/>
								<Image
									src="/images/home/bussiness-sector-mob.png"
									alt="sectors"
									className="figure-grayscale h-full w-full object-cover"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</picture>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative h-full">
							<div className="absolute inset-0 z-2 bg-gradient-to-r from-gray-dark opacity-55"></div>
							<div className="relative z-2 flex h-full items-end px-[3.90625%] pb-[15em] text-white">
								<ul className="-m-3 flex list-none p-0 text-center *:px-3">
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
								</ul>
							</div>
							<picture className="absolute inset-0 z-1">
								<source
									srcSet="/images/home/bussiness-sector.png"
									media="(min-width: 768px)"
									type="image/png"
									width="1920"
									height="1080"
								/>
								<Image
									src="/images/home/bussiness-sector-mob.png"
									alt="sectors"
									className="figure-grayscale h-full w-full object-cover"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</picture>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative h-full">
							<div className="absolute inset-0 z-2 bg-gradient-to-r from-gray-dark opacity-55"></div>
							<div className="relative z-2 flex h-full items-end px-[3.90625%] pb-[15em] text-white">
								<ul className="-m-3 flex list-none p-0 text-center *:px-3">
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
								</ul>
							</div>
							<picture className="absolute inset-0 z-1">
								<source
									srcSet="/images/home/bussiness-sector.png"
									media="(min-width: 768px)"
									type="image/png"
									width="1920"
									height="1080"
								/>
								<Image
									src="/images/home/bussiness-sector-mob.png"
									alt="sectors"
									className="figure-grayscale h-full w-full object-cover"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</picture>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative h-full">
							<div className="absolute inset-0 z-2 bg-gradient-to-r from-gray-dark opacity-55"></div>
							<div className="relative z-2 flex h-full items-end px-[3.90625%] pb-[15em] text-white">
								<ul className="-m-3 flex list-none p-0 text-center *:px-3">
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
								</ul>
							</div>
							<picture className="absolute inset-0 z-1">
								<source
									srcSet="/images/home/bussiness-sector.png"
									media="(min-width: 768px)"
									type="image/png"
									width="1920"
									height="1080"
								/>
								<Image
									src="/images/home/bussiness-sector-mob.png"
									alt="sectors"
									className="figure-grayscale h-full w-full object-cover"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</picture>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative h-full">
							<div className="absolute inset-0 z-2 bg-gradient-to-r from-gray-dark opacity-55"></div>
							<div className="relative z-2 flex h-full items-end px-[3.90625%] pb-[15em] text-white">
								<ul className="-m-3 flex list-none p-0 text-center *:px-3">
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
								</ul>
							</div>
							<picture className="absolute inset-0 z-1">
								<source
									srcSet="/images/home/bussiness-sector.png"
									media="(min-width: 768px)"
									type="image/png"
									width="1920"
									height="1080"
								/>
								<Image
									src="/images/home/bussiness-sector-mob.png"
									alt="sectors"
									className="figure-grayscale h-full w-full object-cover"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</picture>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative h-full">
							<div className="absolute inset-0 z-2 bg-gradient-to-r from-gray-dark opacity-55"></div>
							<div className="relative z-2 flex h-full items-end px-[3.90625%] pb-[15em] text-white">
								<ul className="-m-3 flex list-none p-0 text-center *:px-3">
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
								</ul>
							</div>
							<picture className="absolute inset-0 z-1">
								<source
									srcSet="/images/home/bussiness-sector.png"
									media="(min-width: 768px)"
									type="image/png"
									width="1920"
									height="1080"
								/>
								<Image
									src="/images/home/bussiness-sector-mob.png"
									alt="sectors"
									className="figure-grayscale h-full w-full object-cover"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</picture>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative h-full">
							<div className="absolute inset-0 z-2 bg-gradient-to-r from-gray-dark opacity-55"></div>
							<div className="relative z-2 flex h-full items-end px-[3.90625%] pb-[15em] text-white">
								<ul className="-m-3 flex list-none p-0 text-center *:px-3">
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
									<li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
										<span className="text-brown">Brands</span>
										<span>08</span>
									</li>
								</ul>
							</div>
							<picture className="absolute inset-0 z-1">
								<source
									srcSet="/images/home/bussiness-sector.png"
									media="(min-width: 768px)"
									type="image/png"
									width="1920"
									height="1080"
								/>
								<Image
									src="/images/home/bussiness-sector-mob.png"
									alt="sectors"
									className="figure-grayscale h-full w-full object-cover"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</picture>
						</div>
					</SwiperSlide>

				</Swiper>
			</div>

			{/* thumb swiper slider */}
			<div className="absolute bottom-7 w-full px-[3.90625%] md:bottom-16">
				<div className="[&_.swiper-slide-thumb-active]:text-brown">
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={40}
						slidesPerView={"auto"}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[Thumbs]}
						className="mySwiper">
						<SwiperSlide className="relative max-w-max cursor-pointer pb-4">
							<h6 className="m-0 text-md">Culinary</h6>
							<div className="absolute bottom-0 h-0.5 w-full bg-white"></div>
						</SwiperSlide>
						<SwiperSlide className="relative max-w-max cursor-pointer pb-4">
							<h6 className="m-0 text-md">Retail</h6>
							<div className="absolute bottom-0 h-0.5 w-full bg-white"></div>
						</SwiperSlide>
						<SwiperSlide className="relative max-w-max cursor-pointer pb-4">
							<h6 className="m-0 text-md">Digital Media</h6>
							<div className="absolute bottom-0 h-0.5 w-full bg-white"></div>
						</SwiperSlide>
						<SwiperSlide className="relative max-w-max cursor-pointer pb-4">
							<h6 className="m-0 text-md">Family & Entertainment</h6>
							<div className="absolute bottom-0 h-0.5 w-full bg-white"></div>
						</SwiperSlide>
						<SwiperSlide className="relative max-w-max cursor-pointer pb-4">
							<h6 className="m-0 text-md">Manufacturing</h6>
							<div className="absolute bottom-0 h-0.5 w-full bg-white"></div>
						</SwiperSlide>
						<SwiperSlide className="relative max-w-max cursor-pointer pb-4">
							<h6 className="m-0 text-md">Wholesale</h6>
							<div className="absolute bottom-0 h-0.5 w-full bg-white"></div>
						</SwiperSlide>
						<SwiperSlide className="relative max-w-max cursor-pointer pb-4">
							<h6 className="m-0 text-md">Facilities Management</h6>
							<div className="absolute bottom-0 h-0.5 w-full bg-white"></div>
						</SwiperSlide>
						<SwiperSlide className="relative max-w-max cursor-pointer pb-4">
							<h6 className="m-0 text-md">Culinary</h6>
							<div className="absolute bottom-0 h-0.5 w-full bg-white"></div>
						</SwiperSlide>
						<SwiperSlide className="relative max-w-max cursor-pointer pb-4">
							<h6 className="m-0 text-md">Culinary</h6>
							<div className="absolute bottom-0 h-0.5 w-full bg-white"></div>
						</SwiperSlide>
						<SwiperSlide className="relative max-w-max cursor-pointer pb-4">
							<h6 className="m-0 text-md">Culinary</h6>
							<div className="absolute bottom-0 h-0.5 w-full bg-white"></div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
}
