"use client";

import { useContext } from "react";
import { CategoryContext } from "../utilities/context/CategoryProvider";

type CategoryButtonProps = {
  titleData?: string;
};

export default function CategoryButton({ titleData}: CategoryButtonProps) {
  const { category, changeCategory } = useContext(CategoryContext);

  let validatedTitle = titleData != undefined ? titleData : "";
  // console.log("abc", validatedTitle);

  return (
    <div
      onClick={()=> changeCategory(validatedTitle)}
      className={`pt-2 
      pb-2 
      ps-3 
      pe-3 
      rounded-lg 
      shadow-md 
      cursor-pointer 
      text-black 
      hover:bg-black hover:text-slate-100
      ${validatedTitle == category ? "bg-black text-slate-100" : ""}  
      `}
    >
      {validatedTitle}
    </div>
  );
}
