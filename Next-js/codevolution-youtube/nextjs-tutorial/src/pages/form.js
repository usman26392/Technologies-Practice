import Footer from "@/components/Footer";
import Link from "next/link"


const form = () => {
  return (
    <>
        <div>form</div>
        <Link href="/">Go to home page!</Link>
    </>
  )
}

export default form;

// when we don't need to use header in this page
form.getLayout = function PageLaypout(page) {
  return (
    <>
      {page}
      <Footer/>
    </>
  )
}