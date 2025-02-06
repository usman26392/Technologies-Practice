
"use client";

import { useContext, useLayoutEffect } from "react";
import { CategoryContext } from "../utilities/context/CategoryProvider";
import CategoryButton from "./category-button";
import {CategoryContextType} from "@/app/utilities/context/CategoryProvider"

type CategoryListProps = {
  categoriesData: any;
};

// Before
// export default function CategoryList({ categoriesData }: CategoryListProps) {
//   // console.log("Data", categoriesData?.data);
//   let dataCategory:any[] = categoriesData?.data;
//   return (
//     <div className="flex gap-6 mb-8">

//       {dataCategory?.length > 0 &&
//         dataCategory?.map((category: any, idx: number) => (
//           <div key={idx}>
//             <CategoryButton titleData={category?.Title} />
//           </div>
//         ))}
//     </div>
//   );
// }



// After
export default function CategoryList({ categoriesData }: CategoryListProps) {
  let dataCategory: any[] = categoriesData?.data;
  // console.log("Data", dataCategory);
  const { category, changeCategory } =
    useContext<CategoryContextType>(CategoryContext);

    // console.log("category from context provider", category);
    useLayoutEffect(()=> {
      changeCategory(dataCategory[0].Title)
    }, []);


  return (
    <div className="flex gap-6 mb-8">
      {dataCategory?.length > 0 &&
        dataCategory?.map((category: any, idx: number) => (
          <div key={idx}>
            <CategoryButton titleData={category?.Title} />
          </div>
        ))}
    </div>
  );
}
