"use client";
import Teamcard, { TeamcardProps } from "../../team-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./index.scss";

type TeamProps = {
	title: string;
	teamCardList: TeamcardProps[]; // Array of TeamcardProps
};

export default function Team({ title, teamCardList }: TeamProps) {
	console.log("Team component rendered");
	// console.log(teamCardList);
	return (
		<section className="py-8 xl:py-24">
			<div className="container">{title && <h2>{title}</h2>}</div>
			{teamCardList?.length > 0 && (
				<div>
					<Swiper
						modules={[EffectCoverflow]}
						loop={true}
						speed={1000}
						slidesPerView={1.5}
						effect="coverflow"
						centeredSlides={true}
						coverflowEffect={{
							depth: 0,
							rotate: 0,
							scale: 0.75,
							stretch: 0,
							modifier: 1,
							slideShadows: false,
						}}
						observeParents={true}
						observer={true}
						spaceBetween={0}
						breakpoints={{
							576: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
							1200: {
								slidesPerView: 4,
							},
						}}
						className="team-slider">
						{teamCardList.map((card: TeamcardProps, idx: number) => {
							// Destructure the card object to get the properties we need
							const deStructuredCard = {
								id: card?.id,
								url: card?.url,
								personName: card?.personName,
								personDesignation: card?.personDesignation,
							};

							console.log("actual Card", card);
							console.log("deStructuredCard", deStructuredCard);

							return (
								<SwiperSlide key={idx}>
									<Teamcard {...deStructuredCard} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			)}
		</section>
	);
}
