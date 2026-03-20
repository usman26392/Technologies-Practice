
import Link from "next/link"
import { useRouter } from "next/router"
import Button from "@/components/Button";
import s from "../styles/Home.module.css"
import Head from "next/head";



export default function Home() {
    const router = useRouter();
    function handleOrder() {
        console.log("place order");
        // router.push("/form/");
        // or
        router.replace("/form/")
    }

    return (
        <>
        <Head>
            <title>Home page ! </title>
        </Head>

            <Link href="/blog/" >Blog</Link>
            <br></br>
            <Link href="/products/">Products</Link>
            <h1 className= { `${s.h1}`}   >Home page</h1>

            <button onClick={handleOrder}>Place order</button>

            <p>
                <br></br>
                <Link href="/userlist" >go to userlist</Link>
            </p>

            <Button text="submit" cssClass="primary-btn" />
            <br></br>
            <Link href="/posts/" >Posts</Link>

        </>
    )
}