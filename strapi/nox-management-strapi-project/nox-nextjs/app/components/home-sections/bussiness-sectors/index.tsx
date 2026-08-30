"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/thumbs";
import "./index.scss";
import { Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import { STRAPI_URL } from "@/app/lib/data";

type BussinessSectorsProps = {
	Title?: string;
	Bussiness__slides?: {
		Brands__Count?: {
			Title?: string;
			Count?: string;
		}[];
		Brand__Categories: {
			title?: string;
		};
		Desktop__Figure?: {
			url?: string;
		};
		mobileUrl?: {
			url?: string;
		};
	}[];
};

export default function BussinessSectors({
	Title,
	Bussiness__slides,
}: BussinessSectorsProps) {
	console.log("BussinessSectors component rendered");
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

	return (
		<section className="relative h-[40em] py-8 md:h-screen xl:py-24">
			<div className="container relative z-1">{Title && <h2>{Title}</h2>}</div>
			{/* figure slider */}
			<div className="absolute inset-0 z-0">
				<Swiper
					spaceBetween={10}
					thumbs={{
						swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
					}}
					modules={[Thumbs]}
					className="h-full">
					{(Bussiness__slides ?? []).length > 0 &&
						Bussiness__slides?.map((slide, idx) => (
							<SwiperSlide key={idx}>
								<div className="relative h-full">
									<div className="absolute inset-0 z-2 bg-gradient-to-r from-gray-dark opacity-55"></div>
									<div className="relative z-2 flex h-full items-end px-[3.90625%] pb-[15em] text-white">
										<ul className="-m-3 flex list-none p-0 text-center *:px-3">
											{(slide?.Brands__Count ?? [])?.length > 0 &&
												slide?.Brands__Count?.map((item, idx) => (
													<li
														key={idx}
														className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
														<span className="text-brown">{item?.Title} </span>
														<span>{item?.Count}</span>
													</li>
												))}
											{/* <li className="flex flex-col [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-t-gray-light2">
												<span className="text-brown">locations</span>
												<span>08</span>
											</li> */}
										</ul>
									</div>
									{/* image */}
									<picture className="absolute inset-0 z-1">
										<source
											srcSet={`${STRAPI_URL}${slide?.Desktop__Figure?.url || ""}`}
											media="(min-width: 768px)"
											type="image/png"
											width="1920"
											height="1080"
										/>
										<Image
											src={`${STRAPI_URL}${slide?.mobileUrl?.url || ""}`}
											alt="sectors"
											className="figure-grayscale h-full w-full object-cover"
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</picture>
								</div>
							</SwiperSlide>
						))}
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
						{(Bussiness__slides ?? []).length > 0 &&
							Bussiness__slides?.map((slide, idx) => (
								<SwiperSlide className="relative max-w-max cursor-pointer pb-4" key={idx}>
									<h6 className="m-0 text-md">{slide?.Brand__Categories?.title} </h6>
									<div className="absolute bottom-0 h-0.5 w-full bg-white"></div>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
