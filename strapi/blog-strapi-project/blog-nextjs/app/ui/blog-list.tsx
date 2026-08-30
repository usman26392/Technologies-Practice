"use client";

import { useContext } from "react";
import { CategoryContext } from "../utilities/context/CategoryProvider";
import BlogCard from "./blog-card";

type BlogListProps = {
  blogs: any[];
};

// Before filter
// export default function BlogList({ blogs }: BlogListProps) {
//   // console.log("check", blogs);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
//       {blogs?.length > 0 &&
//         blogs.map((blog, idx) => (
//           <div key={idx}>
//             <BlogCard
//               imageUrl={blog?.Image?.url}
//               title={blog?.Title}
//               description={blog?.Description}
//               objectId={blog?.documentId}
//             />
//           </div>
//         ))}
//     </div>
//   );
// }


// After filter
export default function BlogList({ blogs }: BlogListProps) {
  // console.log("check", blogs);

  const { category } = useContext(CategoryContext);
  const filterBlogs = blogs.filter((blog: any) => {
    return blog?.categories.some((cat: any) => cat?.Title == category);
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
      {filterBlogs?.length > 0 &&
        filterBlogs.map((blog, idx) => (
          <div key={idx}>
            <BlogCard
              imageUrl={blog?.Image?.url}
              title={blog?.Title}
              description={blog?.Description}
              objectId={blog?.documentId}
            />
          </div>
        ))}
    </div>
  );
}
