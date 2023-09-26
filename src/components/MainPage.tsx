import { ClipboardDocumentListIcon } from "@heroicons/react/20/solid";
import Gallery from "./Gallery";
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
  const onClipboardClick = () => {
    navigator.clipboard.writeText("서울 서초구 서초대로77길 37 10층");
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <section className="flex relative flex-col text-white bg-gradient-to-b from-color-1 via-color-1 via-55% to-zinc-50">
          <Stars />
          <Title />
          <Landing />
          <div className="grid grid-rows-2 gap-0.5 px-5 tracking-wider pt-16 pb-24">
            <div className="flex items-center justify-center col-span-2 text-base font-normal text-center text-white">
              <span className="pr-2">서울 서초구 서초대로77길 37 10층</span>
              <button>
                <ClipboardDocumentListIcon
                  className="w-6 h-6 text-white"
                  onClick={onClipboardClick}
                />
              </button>
            </div>
            <div className="flex items-center justify-center col-span-2 text-base font-normal text-center text-white">
              2023년 11월 5일 일요일 오후 1시
            </div>
          </div>
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
