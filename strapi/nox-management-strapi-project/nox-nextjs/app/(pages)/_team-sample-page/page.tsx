import Team from "@/app/components/home-sections/team";
import Innerhero from "@/app/components/inner-hero";
import teamCardsData from "@/app/data/team-card-list.json";

export default function Page() {
  return (
    <>
        <Innerhero/>
        <Team title={teamCardsData?.title} teamCardList={teamCardsData?.teamCardList}/>
    </>
  )
}
