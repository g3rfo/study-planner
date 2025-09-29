import CalendarControlPanel from "./ControlPanel/CalendarControlPanel"

function Calendar() {
  return (
    <div className="w-[80vw] max-w-[1560px] my-10 shadow-xl">
      <CalendarControlPanel />
      <div className="mt-6">
        Calendar
      </div>
    </div>
  );
}

export default Calendar;