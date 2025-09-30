import ControlPanelTitle from "../../../Components/Common/ControlPanelTitle";
import AddLessonButton from "./AddLessonButton";
import SaveScheduleButton from "./SaveScheduleButton";
import SwitchDateBar from "./SwitchDateBar";


function CalendarControlPanel() {
  return (
    <div className="px-6 h-23 w-full flex justify-between items-center bg-[#abcefd] dark:bg-[#1F2D4D]">
      <ControlPanelTitle
        iconSource='./images/active/CalendarIcon.svg' 
        title='Weekly Schedule'
        bg='bg-[#DBEAFE] dark:bg-[#1E3A8A]/30' 
      />
      <div className="flex gap-2 items-center">
        <SwitchDateBar />
        <SaveScheduleButton />
        <AddLessonButton />
      </div>
    </div>
  );
}

export default CalendarControlPanel;