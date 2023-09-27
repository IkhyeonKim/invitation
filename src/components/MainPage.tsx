import Gallery from "./Gallery";
import Info from "./Info";
import Landing from "./Landing";
import MapSection from "./Map";
import OurStory from "./OurStory";
import Stars from "./Stars";
import Title from "./Title";
import TypeWriter from "./TypeWriter";

// 24902 메시지
// 190시간 18분 21초 통화
// TODO:
// 1. Color generate from a photo
// https://coolors.co/191729-2c2856-4c4b59-3d3966-252442

const MainPage = () => {
  return (
    <div className="relative flex w-full main">
      <div className="flex flex-col w-full">
        <section className="flex relative flex-col text-white bg-gradient-to-b from-color-1 via-color-1 via-55% to-zinc-50">
          <Stars />
          <Title />
          <Landing />
          <Info />
          <div>
            <MapSection />
          </div>
        </section>
        <div>
          <OurStory />
        </div>
        <section className="bg-gray-400">
          <TypeWriter />
        </section>
        <section>
          <Gallery />
        </section>
      </div>
    </div>
  );
};

export default MainPage;
