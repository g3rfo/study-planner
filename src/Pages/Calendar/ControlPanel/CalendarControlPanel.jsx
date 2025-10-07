import ControlPanelTitle from "../../../Components/Common/ControlPanelTitle";
import AddLessonButton from "./AddLessonButton";
import SaveScheduleButton from "./SaveScheduleButton";
import SwitchDateBar from "./SwitchDateBar";

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function CalendarControlPanel({ currentWeekName, setCurrentWeekName, setCalendar, startDate = null, endDate = null }) {
  return (
    <div className="px-6 h-23 w-full flex justify-between items-center bg-[#abcefd] dark:bg-[#1F2D4D]">
      <ControlPanelTitle
        iconSource='./images/active/CalendarIcon.svg' 
        title='Weekly Schedule'
        bg='bg-[#DBEAFE] dark:bg-[#1E3A8A]/30' 
      />
      <div className="flex gap-2 items-center">
        <SwitchDateBar
          currentWeekName={currentWeekName}
          setCurrentWeekName={setCurrentWeekName}
          startDate={`${monthNames[startDate.getMonth()]} ${startDate.getDate()}`}
          endDate={`${monthNames[endDate.getMonth()]} ${endDate.getDate()}`}
        />
        <SaveScheduleButton />
        <AddLessonButton setCalendar={setCalendar} startDate={startDate} endDate={endDate}/>
      </div>
    </div>
  );
}

export default CalendarControlPanel;