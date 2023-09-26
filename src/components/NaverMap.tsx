import { useEffect } from "react";

const markerHtml = () => {
  return `
  <div class="flex items-center bg-blue-700 rounded-3xl py-1.5 px-2.5 before:w-2.5 before:h-2.5 before:rotate-45 before:bg-blue-700 before:bottom-[-2px] before:absolute before:left-3 before:skew-x-12 before:skew-y-12">
      <div class="flex bg-white p-1 rounded-full z-10">
        <img src="/map-pin.svg" />
      </div>
      <div class="pl-2 text-xs font-medium text-white">
          모드라운지 강남점
      </div>
  </div>`;
};

const NaverMap = () => {
  const { naver } = window;

  useEffect(() => {
    const mapDiv = document.getElementById("naver-map");
    const position = new naver.maps.LatLng(37.5009795, 127.0251088);

    const map = new naver.maps.Map(mapDiv, {
      center: position,
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.RIGHT_BOTTOM,
      },
    });

    const markerOptions = {
      position: position.destinationPoint(10, 0),
      map: map,
      icon: {
        content: [markerHtml()].join(""),
        size: new naver.maps.Size(30, 30),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(25, 26),
      },
    };

    new naver.maps.Marker(markerOptions);
  }, [naver]);

  return <div id="naver-map" style={{ width: "100%", height: "100%" }} className="max-w-md max-h-96"></div>;
};

export default NaverMap;
