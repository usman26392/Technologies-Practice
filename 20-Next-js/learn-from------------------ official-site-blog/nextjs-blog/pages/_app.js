
// this file for global css importing

import '../styles/globals.css';



// top-level React component that wraps all the pages in your application.
export default function App({Component, pageProps}) {
  return (
    <Component {...pageProps} />
  )
}
