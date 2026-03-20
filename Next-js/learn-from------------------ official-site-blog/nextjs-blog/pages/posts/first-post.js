import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

import Layout from "../../components/layout";


// function FirstPost() {
//   return (
//     <div>
//       <Head>
//         <title>First Post</title>
//         <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
//       </Head>
//       <Script
//         src="https://connect.facebook.net/en_US/sdk.js"
//         strategy="lazyOnload"
//         onLoad={() => console.log("script loaded!")}
//       />
      
//       <h1>First Post</h1>
//       <h2>
//         <Link href="/">Back to home</Link>
//       </h2>
//     </div>
//   );
// }

// export default FirstPost;



// for layout component
function FirstPost(postData) {
  return (

    <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h2>{postData.postData.prerendering.title} </h2>
        <p>{postData.postData.prerendering.date}</p>
        <p>{postData.postData.prerendering.description} </p>
        <ul>
          {
            postData.postData.prerendering.types.map((type, idx)=> {
              return (
                <li key={idx}>{type.item } </li>
              )
            })
          }
        </ul>
        <p> {postData.postData.prerendering.description2} </p>
    </Layout>

  );
}

export default FirstPost;


// pre-rendering: static generation with data
export async function getStaticProps() {
  const response = await fetch("http://localhost:2000/post");
  const data = await response.json();
  console.log(data)
  return {
    props: {
      postData: data
    }
  }

}


