import { closePopup } from "../../../../Hooks/usePopup";
import Input from "../../../../Components/Common/Input";
import Button from "../../../../Components/Common/Button";
import PurpleButton from "../../../../Components/Common/PurpleButton";
import ColorChooseBar from "../../../../Components/Common/ColorChooseBar";
import { saveNewLesson } from "../../../../Utils/Lesson/saveNewLesson";
import { useEffect, useRef, useState } from "react";

function AddLessonPopup({ setCalendar, startDate, endDate }) {
  const [focusedItem, setFocusedItem] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const popup = popupRef.current;
    if (!popup) return;

    popup.tabIndex = -1;
    popup.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();

        if (!focusedItem || focusedItem === popup) {
          saveNewLesson(setCalendar);
        } else {
          focusedItem.blur();
        }
      }

      if (e.key === "Escape") {
        e.preventDefault();
        closePopup();
      }
    };

    popup.addEventListener("keydown", handleKeyDown);
    return () => popup.removeEventListener("keydown", handleKeyDown);
  }, []);


  const getFormatedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const calendarStartDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const calendarEndDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  calendarStartDate.setDate(calendarStartDate.getDate() - 21);
  calendarEndDate.setDate(calendarEndDate.getDate() + 21);

  return (
    <div
      ref={popupRef}
      className="p-6 w-[clamp(400px,40%,500px)] h-fit bg-white outline-none
      dark:bg-[#1F2937] shadow-2xl rounded-xl box-border fade-in-up"
    >
      <div className="flex justify-between items-center h-7">
        <h1 className="text-[18px] font-medium text-[#374151] dark:text-white">
          Add New Lesson
        </h1>
        <button
          className="flex justify-center items-center w-7 h-7 cursor-pointer rounded-full
          hover:bg-[#F9FAFB] hover:dark:bg-[#374151] duration-150 outline-none"
          onClick={closePopup}
        >
          <img src="./images/CloseIcon.svg" alt="" className="w-6 h-6" />
        </button>
      </div>
      <div className="mt-6 flex flex-col gap-5">
        <div className="h-18">
          <div className="mb-1">
            <label
              htmlFor="lesson-name"
              className="text-[14px] text-[#374151] dark:text-[#D1D5DB] font-light"
            >
              Lesson Name
            </label>
          </div>
          <div className="h-11">
            <Input
              id={'lesson-name'}
              placeholder={'Add new lesson name'}
              max={30}
            />
          </div>
        </div>
        <div className="h-18">
          <div className="mb-1">
            <label
              htmlFor="lesson-link"
              className="text-[14px] text-[#374151] dark:text-[#D1D5DB] font-light"
            >
              Meeting Link
            </label>
          </div>
          <div className="h-11">
            <Input
              id={'lesson-link'}
              placeholder={'https://...'}
              onFocus={(e) => setFocusedItem(e.target)}
            />
          </div>
        </div>
        <div className="h-18">
          <div className="mb-1">
            <label
              htmlFor="lesson-date"
              className="text-[14px] text-[#374151] dark:text-[#D1D5DB] font-light"
            >
              Date
            </label>
          </div>
          <div className="h-11">
            <Input
              id={'lesson-date'}
              type="date"
              value={getFormatedDate(new Date())}
              min={getFormatedDate(calendarStartDate)}
              max={getFormatedDate(calendarEndDate)}
              onFocus={(e) => setFocusedItem(e.target)}
            />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="h-18 w-full">
            <div className="mb-1">
              <label
                htmlFor="lesson-start-time"
                className="text-[14px] text-[#374151] dark:text-[#D1D5DB] font-light"
              >
                Start Time
              </label>
            </div>
            <div className="h-11">
              <Input
                id={'lesson-start-time'}
                type="time"
                min="06:00"
                max="22:00"
                onFocus={(e) => setFocusedItem(e.target)}
              />
            </div>
          </div>
          <div className="h-18 w-full">
            <div className="mb-1">
              <label
                htmlFor="lesson-end-time"
                className="text-[14px] text-[#374151] dark:text-[#D1D5DB] font-light"
              >
                End Time (+20min)
              </label>
            </div>
            <div className="h-11">
              <Input
                id={'lesson-end-time'}
                type="time"
                min="06:00"
                max="22:00"
                onFocus={(e) => setFocusedItem(e.target)}
              />
            </div>
          </div>
        </div>
        <div className="h-18">
          <div className="mb-1">
            <span className="text-[14px] text-[#374151] dark:text-[#D1D5DB] font-light">
              Lesson Color
            </span>
          </div>
          <div className="h-11 px-6">
            <ColorChooseBar />
          </div>
        </div>
        <div className="h-23">
          <div className="mb-1">
            <label
              htmlFor="lesson-notes"
              className="text-[14px] text-[#374151] dark:text-[#D1D5DB] font-light"
            >
              Notes
            </label>
          </div>
          <div className="h-16">
            <textarea
              id={'lesson-notes'}
              maxLength="110"
              className="resize-none w-full h-full transition-all focus:transition-none box-border px-3 bg-white 
              dark:bg-[#374151] shadow-sm rounded-lg text-[16px] text-[#374151] dark:text-[#CCCCCC] font-light
                placeholder:text-[16px] focus:border-none focus:outline-3 focus:outline-[#A855F7] content-center
                placeholder:text-[#CCCCCC] placeholder:font-light"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-2">
        <Button
          title={'Cancel'}
          h={10}
          fs={16}
          func={closePopup}
        />
        <PurpleButton
          title={'Save'}
          h={10}
          func={() => saveNewLesson(setCalendar)}
        />
      </div>
    </div>
  );
}

export default AddLessonPopup;