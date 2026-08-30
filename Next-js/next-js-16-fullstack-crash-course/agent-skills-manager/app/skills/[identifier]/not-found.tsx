import Link from "next/link";

export default function NotFound() {
  return <div className="p-4 m-4 mx-auto text-center">
    <h1>404 - Page Not Found !!!!!!!!</h1>
    <Link href="/skills" className="btn btn-primary mt-4">
      Back to Skills List
    </Link>
  </div>
}