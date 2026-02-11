import Team from "@/app/components/home-sections/team";
import Innerhero from "@/app/components/inner-hero";
import teamCardsData from "@/app/data/team-card-list.json";
import { getTeamData } from "@/app/lib/data";

export default async function Page() {

  let teamListData = await getTeamData("populate[team_lists][populate]=Figure_sm");
  // console.log("team list dataasss", teamListData);

  const team__list__title = teamListData?.Title,
        team__list: any[] = teamListData?.team_lists;

  return (
    <>
        <Innerhero/>
        <Team title={team__list__title} teamCardList={team__list}/>
    </>
  )
}
