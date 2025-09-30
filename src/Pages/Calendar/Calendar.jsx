import CalendarControlPanel from "./ControlPanel/CalendarControlPanel"
import Schedule from "./Schedule/Schedule";

function Calendar() {
  return (
    <div className="w-[80vw] max-w-[1560px] my-10 shadow-xl overflow-hidden rounded-2xl fade-in-up">
      <CalendarControlPanel />
      <Schedule />
    </div>
  );
}

export default Calendar;