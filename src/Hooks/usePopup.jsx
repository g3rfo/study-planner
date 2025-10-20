import { useState } from "react";
import { createPortal } from "react-dom";

let setPopupContentGlobal = null;

export function usePopup() {
  const [content, setContent] = useState(null);
  setPopupContentGlobal = setContent;

  const close = () => setContent(null);

  const open = (innerElement) => {
    setContent(
      <div 
        className="fixed top-0 w-full h-screen flex justify-center
          items-center backdrop-blur-xs"
      >
        {innerElement}
      </div>
    );
  };

  const PopupContainer = () =>
    content ? createPortal(content, document.getElementById("root")) : null;

  return { open, close, PopupContainer };
}

export const closePopup = () => setPopupContentGlobal?.(null);
