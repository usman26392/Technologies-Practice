// import logo from './logo.svg';
import './App.css';
import Navigation from './large-components/nav/Navigation';
import Hero from './large-components/hero/Hero';
import Partners from './large-components/our-partners/Partners';
import WHAT_GPT3 from './large-components/what-gpt3/WHAT_GPT3';
import Future from './large-components/future/Future';
import IMAGINATION from './large-components/imagination/IMAGINATION';
import CTA from './large-components/cta/CTA';
import BLOG from './large-components/blog/BLOG';
import FOOTER from './large-components/footer/FOOTER';


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Hero/>
        <Partners/>
        <WHAT_GPT3/>
        <Future/>
        <IMAGINATION/>
        <CTA/>
        <BLOG/>
        <FOOTER/>

    </div>
  );
}

export default App;
