import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  imageUrl: any;
  title: string;
  description?: string;
  objectId: number;
};

export default function BlogCard({
  imageUrl,
  title,
  description = "a",
  objectId,
}: BlogCardProps) {
  // description add with truncate
  let truncateDescription =
    description?.length > 80
      ? description.substring(0, 80) + "..."
      : description;

  // image url set
  const imageUrlwithHTTP = `http://localhost:1337${imageUrl}`;

  // console.log(imageUrlwithHTTP)

  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 ">
      <Link href={`/blog/${objectId}`}>
        <div className="relative h-48 ">
          <Image
            fill
            src={imageUrlwithHTTP}
            alt="check"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {title}
          </h2>
          <p className="text-gray-600">{truncateDescription}</p>
        </div>
      </Link>
    </div>
  );
}
