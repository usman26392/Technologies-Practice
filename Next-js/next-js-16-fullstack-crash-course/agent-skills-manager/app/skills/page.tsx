import Link from "next/link";
import { getskills } from "./SKILLS";

export default async function Page() {
  const skills = await getskills();

  console.log("skills page rendered!");

  const skillsLinks = skills.map((skill) => {
    return (
      <li key={skill.id}>
        <Link href={`skills/${skill.id}`}>{skill.name}</Link>
      </li>
    );
  });

  return (
    <div className="p-4 flex flex-col gap-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Skills Page:</h1>
      <Link href="skills/create" className="btn btn-primary self-end">
        Create Skill
      </Link>
      <ul className="space-y-2 menu">{skillsLinks}</ul>
    </div>
  );
}
