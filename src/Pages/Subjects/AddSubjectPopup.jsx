import { closePopup } from "../../Hooks/usePopup";
import Button from "../../Components/Common/Button";
import Input from "../../Components/Common/Input";
import PurpleButton from "../../Components/Common/PurpleButton";
import { saveSubjectName } from "../../Utils/saveSubjectName";
import { useCallback, useEffect, useRef, useState } from "react";

function AddSubjectPopup({ setSubjects }) {
  const [focusedItem, setFocusedItem] = useState(null);
  const popupRef = useRef(null);

  const saveNewSubject = useCallback(() => {
    saveSubjectName('add-subject', 'save', setSubjects);
  }, [setSubjects]);

  useEffect(() => {
    const popup = popupRef.current;
    if (!popup) return;

    popup.tabIndex = -1;
    popup.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();

        if (!focusedItem || focusedItem === popup) {
          saveNewSubject();
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

  return (
    <div
      ref={popupRef}
      className="p-6 w-[clamp(400px,40%,500px)] h-fit bg-white outline-none
      dark:bg-[#1F2937] shadow-2xl rounded-xl box-border fade-in-up"
    >
      <div className="flex justify-between items-center h-7">
        <h1 className="text-[18px] font-medium text-[#374151] dark:text-white">
          Add New Subject
        </h1>
        <button
          className="flex justify-center items-center w-7 h-7 cursor-pointer rounded-full
          hover:bg-[#F9FAFB] hover:dark:bg-[#374151] duration-150 outline-none"
          onClick={closePopup}
        >
          <img src="./images/CloseIcon.svg" alt="" className="w-6 h-6" />
        </button>
      </div>
      <div className="mt-8 h-18">
        <div className="mb-1">
          <label
            htmlFor="add-subject"
            className="text-[14px] text-[#374151] dark:text-[#D1D5DB] font-light"
          >
            Subject Name
          </label>
        </div>
        <div className="h-11">
          <Input
            id={'add-subject'}
            placeholder={'Add new subject name'}
            onFocus={(e) => setFocusedItem(e.target)}
          />
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
          func={saveNewSubject}
        />
      </div>
    </div>
  );
}

export default AddSubjectPopup;