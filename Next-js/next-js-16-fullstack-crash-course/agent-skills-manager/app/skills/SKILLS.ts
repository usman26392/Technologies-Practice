 
export type SkillProps = {
    id: string;
    name: string;
    description: string;
    category: string;
    createdAt: string;
    updatedAt: string;
}

export let skills: SkillProps[] = [
    {
        id: "1",
        name: "JavaScript",
        description: "A programming language for web development",
        category: "Programming",
        createdAt: "2023-01-01",
        updatedAt: "2023-01-01"
    },
    {
        id: "2",
        name: "Python",
        description: "A programming language for data science and machine learning",
        category: "Programming",
        createdAt: "2023-01-01",
        updatedAt: "2023-01-01" 
    },
    {
        id: "3",
        name: "React",
        description: "A JavaScript library for building user interfaces",   
        category: "Frontend",
        createdAt: "2023-01-01",
        updatedAt: "2023-01-01"
    }
]


export async function getskills() {
    // for the cheking global-error.tsx handling
    // throw new Error("Failed to fetch skills data!");
    // for Artificial delay to check loading.tsx handling
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("first")
    return [...skills]
}

export function addSkills(skill: SkillProps) {
    skills = [...skills, skill]
    console.log("skill updated!");
}