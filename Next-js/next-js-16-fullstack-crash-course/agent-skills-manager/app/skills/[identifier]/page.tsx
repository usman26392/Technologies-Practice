import { notFound } from "next/navigation";
import { getskills, skills } from "../SKILLS";

type PageDetailProps = {
  params: Promise<{
    identifier: string;
  }>;
};

export default async function PageDetail({ params }: PageDetailProps) {

  console.log("skills detail page rendered!");

  const skills = await getskills();


  const { identifier } = await params;
  
  const skillsListObj = skills.find((skill) => skill.id === identifier);
  const skillsList = skillsListObj ? (
    <li key={skillsListObj.id}>
      <h2>{skillsListObj.name} </h2>
      <p>{skillsListObj.description}</p>
    </li>
  ) : null;

  if(!skillsListObj) {
    return notFound()
  }

  //   console.log("check",skillsList)

  return (
    <div className="max-w-md mx-auto p-4 flex flex-col gap-4  ">
      PageDetail:
      {/* {skillsListObj ? <ul>{skillsList}</ul> : <p>Skills not found.</p>} */}
      <ul>{skillsList}</ul>
    </div>
  );
}
