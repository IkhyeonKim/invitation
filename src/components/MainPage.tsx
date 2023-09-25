import { ClipboardDocumentListIcon } from "@heroicons/react/20/solid";
import NaverMap from "./Map";
import TypeWriter from "./TypeWriter";
import Gallery from "./Gallery";
import Landing from "./Landing";
import Title from "./Title";
import Stars from "./Stars";
import OurStory from "./OurStory";

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
        <section className="flex relative flex-col text-white bg-gradient-to-b from-color-1 via-color-1 via-65% to-zinc-500">
          <Stars />
          <Title />
          <Landing />
          <div className="grid grid-rows-2 gap-0.5 px-5 tracking-wider pt-10 pb-52">
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
        </section>
        <div>
          <OurStory />
        </div>
        <div className="h-screen bg-gray-400">
          <TypeWriter />
        </div>
        <div className="flex items-center justify-center h-screen bg-green-200">
          <NaverMap />
        </div>
        <div className="flex items-center">
          <div className="text-sm">서울 서초구 서초대로77길 37 10층</div>
          <button>
            <ClipboardDocumentListIcon
              className="w-5 h-5 text-gray-600"
              onClick={onClipboardClick}
            />
          </button>
        </div>
        <div className="text-sm bg-yellow-200">
          <a
            target="_blank"
            href="https://map.naver.com/p/entry/place/1861303497?lng=127.0251242&lat=37.5009917&placePath=%2Fhome%3Fentry%3Dpll&c=15.00,0,0,0,dh"
          >
            <img src="/naver.png" className="w-6 h-6" />
            Naver map
          </a>
          <a target="_blank" href="https://kko.to/XFW0apO1k_">
            <img src="/kakao.ico" className="w-6 h-6" />
            Kakao map
          </a>
        </div>
        <div className="h-screen bg-red-400">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
