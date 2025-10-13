import { useState } from "react";
import Button from "../../../../Components/Common/Button";
import PurpleButton from "../../../../Components/Common/PurpleButton";
import { closePopup } from "../../../../Hooks/usePopup";
import ChooseWeekOption from "./ChooseWeekOption";
import ChooseWeeksAsSchedule from "./ChooseWeeksAsSchedule";

function SaveSchedulePopup() {
  const [choosedWeek, setChoosedWeek] = useState('From');

  return (
    <>
      <div className="flex justify-between items-center h-7">
        <h1 className="text-[18px] font-medium text-[#374151] dark:text-white">
          Save Schedule
        </h1>
        <button
          className="flex justify-center items-center w-7 h-7 cursor-pointer rounded-full
          hover:bg-[#F9FAFB] hover:dark:bg-[#374151] duration-150 outline-none"
          onClick={closePopup}
        >
          <img src="./images/CloseIcon.svg" alt="" className="w-6 h-6" />
        </button>
      </div>
      <div className="mt-6 flex flex-col">
        <ChooseWeekOption setChoosedWeek={setChoosedWeek}/>
        <ChooseWeeksAsSchedule choosedWeek={choosedWeek}/>
      </div>
      <div className="mt-8 flex justify-end gap-2">
        <Button
          title='Cancel'
          h={10}
          fs={16}
          func={closePopup}
        />
        <PurpleButton
          title='Save'
          h={10}
          func={() => {}}
        />
      </div>
    </>
  );
}

export default SaveSchedulePopup;