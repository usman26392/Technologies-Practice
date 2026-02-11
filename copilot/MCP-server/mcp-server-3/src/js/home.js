import fontResizer from "./common-components/fontResizer";
import pageLoader from "./common-components/pageLoader";
import landscapeOff from "./common-components/landscapeOff";
import stickyHeader from "./common-components/stickyHeader";
import svgConvert from "./common-components/svgConvert";
import navigationSlide from "./common-components/navigationSlide";
import navigationAccordion from "./common-components/navigationAccordion";
import animateObserver from "./common-components/animateObserver";
import lazyLoadImgObserver from "./common-components/lazyLoadImgObserver";
import homeHeroSlider from "./pages-components/home/homeHeroSlider";
import reportPodCastSlider from "./pages-components/home/report-podcast-slider";
import customAccordion from "./common-components/customAccordion";
import astronomicalInsightSlider from "./pages-components/home/astronomicalInsight-slider";
import astronomicalIisotopes from "./pages-components/home/astronomical-isotopes";
import observatorySlider from "./pages-components/home/observatory-slider";
import desktopPanel from "./common-components/desktopPanel";
import testimonialsSlider from "./pages-components/home/testimonials";
import planetsMouseMove from "./pages-components/home/planetsMouseMove";
import atroposAnimation from "./common-components/atroposAnimation";
import ourProducts from "./pages-components/home/our-products";
import spaceLovers from "./pages-components/home/space-lovers";
import brandsSwiperInit from "./common-components/brandsSwiper";

landscapeOff();
// stickyHeader();
svgConvert();
navigationSlide();
navigationAccordion();
animateObserver();
lazyLoadImgObserver();
desktopPanel();




// clipPathImgObserver();
// -------------------- Above functions might be common for all website --------------------------

homeHeroSlider();
brandsSwiperInit();
ourProducts();

