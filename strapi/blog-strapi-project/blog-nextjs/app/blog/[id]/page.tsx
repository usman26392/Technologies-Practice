import Image from "next/image";
import Link from "next/link";

// fetch specific blog
async function fetchBlog(id: number) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://localhost:1337/api/blogs/${id}?populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}




// Dynamic page component
export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {

  // fetch id from page component
  const { id } = await params;
  // console.log("slug", id);

  // id send into fetchBlog() function to extract specific data regarding "documentId".
  const specificBlogData = await fetchBlog(id);
  // console.log("blog detail", specificBlogData);
  const blogDetail = specificBlogData?.data;


  // image url set
  const imageUrlwithHTTP = `http://localhost:1337${blogDetail?.Image?.url}`;


  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href={"/"}> {"< Back"} </Link>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        <Image
          fill
          objectFit="cover"
          src={imageUrlwithHTTP}
          alt=""
          className="rounded-t-lg"
        />
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-semibold">
          { blogDetail?.Title }
        </h1>
        <p className="text-gray-600 mt-2"> {blogDetail?.Description }  </p>
        <div className="mt-4 flex items-center text-gray-400 ">
          <span className="text-sm">Published on {new Date(blogDetail?.updatedAt).toLocaleString() } </span>
        </div>
      </div>
    </div>
  );
}
