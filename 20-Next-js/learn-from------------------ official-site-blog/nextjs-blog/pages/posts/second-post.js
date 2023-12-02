import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";


// for layout component
function SecondPost(postData) {
  return (

    <Layout>
        <Head>
          <title>Second Post</title>
        </Head>
        <h2>{postData.postData.whenUse.title} </h2>
        <p>{postData.postData.whenUse.date}</p>
        <p>{postData.postData.whenUse.description} </p>
        <p>{postData.postData.whenUse.list.title} </p>
        
        <ul>
          {
            postData.postData.whenUse.list.points.map((point, idx)=> {
              return (
                <li key={idx}>{point.item } </li>
              )
            })
          }
        </ul>
        <p> {postData.postData.whenUse.description2} </p>
       <p> {postData.postData.whenUse.description3} </p>
       <p> {postData.postData.whenUse.description4} </p>

    </Layout>

  );
}

export default SecondPost;


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


