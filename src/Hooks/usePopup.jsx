import { useState } from "react";
import { createPortal } from "react-dom";

let setPopupContentGlobal = null;

export function usePopup() {
  const [content, setContent] = useState(null);

  setPopupContentGlobal = setContent;

  const close = () => setContent(null);

  const open = (innerElement) => {
    setContent(
      <div className="absolute top-0 w-screen h-screen flex justify-center items-center backdrop-blur-xs">
        <div className="p-6 w-[clamp(250px,40%,450px)] h-fit bg-white dark:bg-[#1F2937] rounded-xl">
          {innerElement}
        </div>
      </div>
    );
  };

  const PopupContainer = () =>
    content ? createPortal(content, document.getElementById("root")) : null;

  return { open, close, PopupContainer };
}

export const closePopup = () => setPopupContentGlobal?.(null);
