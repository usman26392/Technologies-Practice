import Head from "next/head";
import styles from "./layout.module.css";
import Image from "next/image";
import utilStyle from '../styles/utils.module.css';
import Link from "next/link";


let name = "Muhammad Usman";
export let siteTitle = "Next.js sample website";


function Layout({ children, home }) {
  return (
    <div className={styles.container}>
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <meta name="description" content="Learn how to build a personal website using Next.js" />
        </Head>
        <header className={styles.header}> 
            {
                home ? (
                    <>
                        <Image
                            priority
                            src="/images/usman.png"
                            className={utilStyle.borderCircle}
                            width={144}
                            height={144}
                            alt="profile"
                         />
                         <h1 className={utilStyle.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/usman.png"
                                className={utilStyle.borderCircle}
                                width={144}
                                height={144}
                                alt="profile"
                            />
                        </Link>
                        <h2 className={utilStyle.headingLg}>
                            <Link href="/" className={utilStyle.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )
            }
        </header>

        <main>{children}</main>

        <footer className={` ${styles["title-center"]} ${styles["title-sm"]}  primary-link `}>copyright 2023</footer>

        {
            !home && (
                <div className={styles.backToHome}>
                    <Link href="/">Back to home</Link>
                </div>
            )
        }
    </div>
  )
}

export default Layout;




// simple example of Layout component
// function Layout({children}) {
//   return (
//     <div className={styles.container}>{children}</div>
//   )
// }

// export default Layout
