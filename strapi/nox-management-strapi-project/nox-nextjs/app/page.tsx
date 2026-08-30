// import Image from "next/image";

import Brands from "./components/home-sections/brands";
import BussinessSectors from "./components/home-sections/bussiness-sectors";
import Hero from "./components/home-sections/hero";
import NoxNumbers from "./components/home-sections/nox-numbers";
import Team from "./components/home-sections/team";
import teamCardsData from "@/app/data/team-card-list.json";
import { getHomeData, getTeamData } from "./lib/data";

export default async function Home() {
	console.log("home page rendered");

	let homeData: any = await getHomeData("populate=*"),
		homeData2 = await getHomeData("populate[Home__history__section][populate][0]=Items"),
		homeData3 = await getHomeData(
			"populate[Home__Brands][populate][Brand__Logo][populate]=*&populate[Affiliates__Brands][populate][Brand__Logo][populate]=*&populate[Bussiness__sectors__section][populate][Bussiness__slides][populate]=*&populate[team_lists][populate]=Figure_sm"
		);

	homeData = { ...homeData, ...homeData2, ...homeData3 };
	// console.log(homeData);

	// console.log("home page", homeData?.Video__Url?.url);
	const homeHeroVideoUrl = homeData?.Video__Url?.url;
	const history__title = homeData?.Home__history__section?.History__Title;
	const history__Items: any[] = homeData?.Home__history__section?.Items;
	const brand__Title = homeData?.Home__Brands?.Title;
	const brand__logoes: any[] = homeData?.Home__Brands?.Brand__Logo;
	const brand__Title__affiliates = homeData?.Affiliates__Brands?.Title;
	const brand__logoes__affiliates: any[] = homeData?.Affiliates__Brands?.Brand__Logo;
	const bussiness__sectors__title = homeData?.Bussiness__sectors__section?.Title;
	const bussiness__sectors__Bussiness__slides: any[] =
		homeData?.Bussiness__sectors__section?.Bussiness__slides;
	
		// team list data
	let teamListData = await getTeamData("populate[team_lists][populate]=Figure_sm");
	  // console.log("team list dataasss", teamListData);
	
	  const team__list__title = homeData?.Team__Title,
			team__list: any[] = homeData?.team_lists;

	return (
		<main>
			<Hero url={homeHeroVideoUrl} />
			<NoxNumbers History__Title={history__title} history={history__Items} />
			<BussinessSectors
				Title={bussiness__sectors__title}
				Bussiness__slides={bussiness__sectors__Bussiness__slides}
			/>
			<Team title={team__list__title} teamCardList={team__list}/>
			<Brands title={brand__Title} Brand__Logo={brand__logoes} />
			<Brands
				title={brand__Title__affiliates}
				Brand__Logo={brand__logoes__affiliates}
				bgColor={"bg-gray-dark2"}
			/>
		</main>
	);
}

