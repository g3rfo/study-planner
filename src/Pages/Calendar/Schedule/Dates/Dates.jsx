import { useEffect, useMemo } from "react";
import Day from "./Day";

function Dates({ startDate }) {
  const date = new Date();
  const today = date.getDate();


  const dates = useMemo(() => {
    const arr = [];
    for(let i = 0; i < 7; i++) {
      const nextDate = new Date(startDate);
      nextDate.setDate(startDate.getDate() + i);
      arr.push(nextDate.getDate());
    }
    return arr;
  }, [startDate]);

  useEffect(() => {
    const schedule = document.querySelector('.schedule-content');
    const currentScheduleWidth = getComputedStyle(schedule).width.slice(0, -2);
    const scheduleWidth = getComputedStyle(schedule.firstChild).width.slice(0, -2);

    const dayWidth = scheduleWidth / 7;
    const activeDayIndex = dates.findIndex(date => date === today);
    const activeDayCenter = dayWidth * activeDayIndex + dayWidth / 2;
    const scrollLeft = activeDayCenter - currentScheduleWidth / 2;

    schedule.scrollLeft = scrollLeft;
  }, [dates, today])

  return (
    <div className="flex h-[8%]">
      <Day isToday={today === dates[0] ? true : false} day={'Monday'} date={dates[0]} />
      <Day isToday={today === dates[1] ? true : false} day={'Tuesday'} date={dates[1]} />
      <Day isToday={today === dates[2] ? true : false} day={'Wednesday'} date={dates[2]} />
      <Day isToday={today === dates[3] ? true : false} day={'Thursday'} date={dates[3]} />
      <Day isToday={today === dates[4] ? true : false} day={'Friday'} date={dates[4]} />
      <Day isToday={today === dates[5] ? true : false} day={'Saturday'} date={dates[5]} />
      <Day isToday={today === dates[6] ? true : false} day={'Sunday'} date={dates[6]} />
    </div>
  );
}

export default Dates;