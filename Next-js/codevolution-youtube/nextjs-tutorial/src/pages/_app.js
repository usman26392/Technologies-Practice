import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'



// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default function App({ Component, pageProps }) {
  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />  )
  }
  return (
    <>
      <Header/>
      <Component {...pageProps} />  
      <Footer/>
    </>
  )
}



// <Component {...pageProps} /> these comes pages components.