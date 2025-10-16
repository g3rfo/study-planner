import { useState } from "react";
import Button from "../../../../Components/Common/Button";
import PurpleButton from "../../../../Components/Common/PurpleButton";
import { closePopup } from "../../../../Hooks/usePopup";
import ChooseWeekOption from "./ChooseWeekOption";
import ChooseWeeksAsSchedule from "./ChooseWeeksAsSchedule";
import { saveScheduleTemplate } from "../../../../Utils/ScheduleTemplate/saveScheduleTemplate";

function SaveSchedulePopup() {
  const [option, setOption] = useState('From');
  const [selectedWeeks, setSelectedWeeks] = useState([false, false, false, true, false, false, false]);
  
  const saveSchedule = () => {
    const calendar = JSON.parse(localStorage.getItem('calendar')) || null;

    const firstWeek = selectedWeeks.findIndex(week => week);
    const lastWeek = selectedWeeks.findLastIndex(week => week);

    if (calendar && firstWeek && lastWeek) {
      saveScheduleTemplate(calendar, firstWeek, lastWeek);
      console.log('ScheduleTemplate was saved');
      closePopup();
    }
  }

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
        <ChooseWeekOption setOption={setOption} />
        <ChooseWeeksAsSchedule
          option={option}
          selectedWeeks={selectedWeeks}
          setSelectedWeeks={setSelectedWeeks}
        />
      </div>
      <div className="mt-6">
        <h1 className="text-[13px] text-[#374151] dark:text-[#D1D5DB] font-light">
          * if you save, future weeks will be filled with this schedule. when changing the template, the filled weeks will remain unchanged
        </h1>
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
          func={saveSchedule}
        />
      </div>
    </>
  );
}

export default SaveSchedulePopup;