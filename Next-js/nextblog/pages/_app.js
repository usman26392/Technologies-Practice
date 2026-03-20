import '../styles/globals.css'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        {/* this below componenent as a children of a above Layout component , in this component holding pages */}
        <Component {...pageProps} />
      </Layout>
    </>
  ) 
}

export default MyApp
