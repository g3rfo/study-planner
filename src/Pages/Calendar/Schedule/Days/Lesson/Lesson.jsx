import { useEffect, useRef, useState } from "react";

function Lesson({ top = 0, height = 0, color, title, time, link = null, notes = null }) {
  const [isOpen, setIsOpen] = useState(false);
  const lessonRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (lessonRef.current && lessonRef.current.contains(event.target)) {
        if (notes || link) setIsOpen((prev) => !prev);
      } else {
        setIsOpen(false);
      }
    };

    if (notes || link) {
      document.addEventListener('mousedown', handleClick);
    }

    return () => {
      if (notes || link) {
        document.removeEventListener('mousedown', handleClick);
      }
    };
  }, [notes, link]);

  return (
    <div
      ref={lessonRef}
      className={`absolute ${(notes || link) ? 'cursor-pointer' : ''} ${isOpen ? 'z-3 scale-110' : 'z-1'}
        px-2 w-full flex flex-col gap-1 rounded-lg bg-transparent border-[1px] box-border text-[15px]
        font-medium text-[#1F2937] dark:text-white fade-in-up `}
      style={{
        top: `${top}px`,
        height: isOpen ? 'auto' : `${height}px`,
        backgroundColor: isOpen ? color.b : color.bg,
        borderColor: color.b
      }}
    >
      <div className="w-full h-auto flex justify-between items-top">
        <div className="overflow-hidden h-fit max-w-[55%]">
          <h1
            className={`${isOpen ? ' whitespace-normal break-words' : 'whitespace-nowrap overflow-hidden text-ellipsis'}`}
          >
            {(notes || link) ? (isOpen ? `⯅${title}` : `⯆${title}`) : title}
          </h1>
        </div>
        <h1 className="font-light block w-[40%]">{time}</h1>
      </div>
      {isOpen && (notes || link) ? 
        <div className="overflow-hidden h-fit flex flex-col gap-1 my-1 text-[#1F2937] dark:text-[#ffffff] border-t-2 border-[#ffffff]">
          {notes ?
            <div className="mt-3">
              <h1>Notes:</h1>
              <p className="pl-4 font-light whitespace-normal break-words text-[14px]">
                {notes}
              </p>
            </div>
          : null}
          {link ?
            <div className="overflow-hidden max-w-[100%]">
              <h1>Link:</h1>
              <a href={link} className="pl-4 block whitespace-nowrap overflow-hidden text-ellipsis font-light underline">{link}</a>
            </div>
          : null}
        </div>
      : null}
    </div>
  );
}

export default Lesson;