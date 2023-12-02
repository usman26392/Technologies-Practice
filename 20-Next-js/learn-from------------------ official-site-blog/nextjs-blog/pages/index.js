import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home({post}) {
  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main>
    //     <h1 className={styles.title}>
    //       Read <Link href="/posts/first-post"> this page!</Link>
    //     </h1>
    //   </main>

    //   <style jsx>{`
    //     main {
    //       padding: 5rem 0;
    //       flex: 1;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //       align-items: center;
    //     }
    //     footer {
    //       width: 100%;
    //       height: 100px;
    //       border-top: 1px solid #eaeaea;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     }
    //     footer img {
    //       margin-left: 0.5rem;
    //     }
    //     footer a {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       text-decoration: none;
    //       color: inherit;
    //     }
    //     code {
    //       background: #fafafa;
    //       border-radius: 5px;
    //       padding: 0.75rem;
    //       font-size: 1.1rem;
    //       font-family:
    //         Menlo,
    //         Monaco,
    //         Lucida Console,
    //         Liberation Mono,
    //         DejaVu Sans Mono,
    //         Bitstream Vera Sans Mono,
    //         Courier New,
    //         monospace;
    //     }
    //   `}</style>

    //   <style jsx global>{`
    //     html,
    //     body {
    //       padding: 0;
    //       margin: 0;
    //       font-family:
    //         -apple-system,
    //         BlinkMacSystemFont,
    //         Segoe UI,
    //         Roboto,
    //         Oxygen,
    //         Ubuntu,
    //         Cantarell,
    //         Fira Sans,
    //         Droid Sans,
    //         Helvetica Neue,
    //         sans-serif;
    //     }
    //     * {
    //       box-sizing: border-box;
    //     }
    //   `}</style>

    // </div>

    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>
          I am a front end developer with four year experienece. i have
          developed a lot of challenges websites.
        </p>
        <Link href="/posts/first-post">go to post</Link>
        <br />

        <h2>Blogs</h2>

        {
          post.listings.map((list, idx)=> {
            return (
              <div key={idx}>
                <h2>
                  {
                    list.id == 1 ? <Link href="posts/first-post">{list.item}</Link> : <Link href="posts/second-post">{list.item}</Link>
                  }
                </h2>
                <p>{list.date} </p>
              </div>
            )
          })

        }

        

        
      </section>
    </Layout>
  );
}



// pre-rendering: static generation with data
export async function getStaticProps() {
  const response = await fetch("http://localhost:2000/post");
  const data = await response.json();
  return {
    props: {
      post: data
    }
  }

}