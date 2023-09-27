import { ClipboardDocumentListIcon } from "@heroicons/react/20/solid";
import { createPortal } from "react-dom";
import ToastMessage from "./Toast";
import { useState } from "react";

const Info = () => {
  const [showModal, setShowModal] = useState(false);

  const onCloseModal = () => {
    setTimeout(() => setShowModal(false), 3000);
  };

  const onClipboardClick = () => {
    navigator.clipboard.writeText("서울 서초구 서초대로77길 37 10층");
    setShowModal(true);
    onCloseModal();
  };
  return (
    <div className="grid grid-rows-2 gap-0.5 px-5 tracking-wider pt-16 pb-24">
      <div className="flex items-center justify-center col-span-2 text-base font-normal text-center text-white">
        <span className="pr-2">서울 서초구 서초대로77길 37 10층</span>
        <button>
          <ClipboardDocumentListIcon className="w-6 h-6 text-white" onClick={onClipboardClick} />
        </button>
      </div>
      <div className="flex items-center justify-center col-span-2 text-base font-normal text-center text-white">
        2023년 11월 5일 일요일 오후 1시
      </div>
      {showModal &&
        createPortal(
          <ToastMessage message={"클립보드에 복사되었습니다."} />,
          document.querySelector(".main") || document.body
        )}
    </div>
  );
};

export default Info;
