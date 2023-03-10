import "./App.css";
import imgStoryBg from "./assets/story-bg.png";
import sections from "./content/story";
import Header from "./Header";
import SectionSocial from "./sections/SectionSocial";
import Sections from "./sections/SectionBody";
import BannerParallaxed from "./sections/BannerParallaxed";
import Footer from "./Footer";

function App() {
  return (
    <div
      // fixed height, so <App /> becomes the scrollable container
      className="w-full bg-slate-50"
      style={{
        "--primary-color": "#D05800",
        "--secondary-color": "#5C5646",
        "--gray-color": "#C8C5BD",
        "--hero-border-color": "#D9D9D9",
      }}
    >
      <Header />
      {/* Content container */}
      <div className="flex flex-col gap-8 pb-12">
        {/* Quote */}
        <SectionSocial />
        <Sections sections={sections} childrenInjectedAfter={1}>
          <BannerParallaxed imgSrc={imgStoryBg} />
        </Sections>
      </div>
      <Footer />
    </div>
  );
}

export default App;
