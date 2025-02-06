import Image from "next/image";
import CategoryList from "./ui/category-list";
import BlogList from "./ui/blog-list";

// fetch categories
async function fetchCategory() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      // "http://192.168.0.115:1337/api/categories?populate=*",
      "http://localhost:1337/api/categories?populate=*",

      options
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

// fetch blogs
async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      // "http://192.168.0.115:1337/api/blogs?populate=*",
      "http://localhost:1337/api/blogs?populate=*",

      options
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const categories = await fetchCategory();
  const blogs = await fetchBlogs();

  // console.log("blogs strapi", blogs);

  let blogsData: any[] = blogs?.data;

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <CategoryList categoriesData={categories} />
        <BlogList blogs={blogsData} />
      </main>
    </div>
  );
}
