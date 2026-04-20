
"use client";

import { createSkill } from "@/app/lib/actions"
import { useActionState } from "react"



const initialState = {
    message: ""
}


export default function NewSkillPage() {

    const [ state, formAction, pending ] =  useActionState(createSkill, initialState);


  return (
    <div>
        <form action={formAction} className="form flex flex-col gap-4 max-w-md mx-auto p-4">
            <input type="text" name="name" placeholder="skill name" className="input input-bordered w-full" />
            <textarea name="description" rows={3} placeholder="skill description" className="input input-bordered w-full"></textarea>
            <input type="text" name="category" placeholder="skill category" className="input input-bordered w-full" />
            <p aria-live="polite" className="text-red-500">{state?.message}</p>
            <button disabled={pending} className="btn btn-primary">
                {pending ? "Creating..." : "Create Skill"}
            </button>
        </form>
    </div>
  )
}
