// import Image from "next/image";

import Brands from "./components/home-sections/brands";
import BussinessSectors from "./components/home-sections/bussiness-sectors";
import Hero from "./components/home-sections/hero";
import NoxNumbers from "./components/home-sections/nox-numbers";
import Team from "./components/home-sections/team";
import teamCardsData from "@/app/data/team-card-list.json";



export default function Home() {
  console.log("home page rendered");
  return (
    <main>
      <Hero/>
      <NoxNumbers/>
      <BussinessSectors/>
      <Team title={teamCardsData?.title} teamCardList={teamCardsData?.teamCardList} />
      <Brands title={"Brands"}/>
      <Brands title={"Affiliates"} bgColor={"bg-gray-dark2"} />

    </main>
  );
}
