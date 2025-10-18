import { useEffect, useState } from "react";
import CalendarControlPanel from "./ControlPanel/CalendarControlPanel"
import Schedule from "./Schedule/Schedule";
import { injectScheduleTemplate } from "../../Utils/ScheduleTemplate/injectScheduleTemplate";

// {
//   week0 : {
//     template: {isTemplated: false, weekNum: null}
//     startDate : null,
//     endDate : null,
//     mon : {
//       date: null,
//       lessons : [
//         {
//           id:          
//           startTime: null,
//           endTime: null,
//           title: null,
//           notes: null,
//           link: null,
//           color: null
//         }
//       ]
//     },
//     tue : {},
//     wed : {},
//     thu : {},
//     fri : {},
//     sat : {},
//     sun : {},
//   },
//   week1 : {},
//   week2 : {},
//   week3 : {},
//   week4 : {},
//   week5 : {},
//   week6 : {},
// }
const dayTime = 24 * 60 * 60 * 1000;

function Calendar() {
  const [calendar, setCalendar] = useState(null);
  const [currentWeekName, setCurrentWeekName] = useState('week3');
  const [currentWeek, setCurrentWeek] = useState({});
  
  useEffect(() => {
    const today = new Date();
    let newCalendar = {};
    
    const fillWithEmptyWeeks = () => {
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + (-21 + 7 * i));
        
        const [startDate, endDate] = getWeekDateRange(date);
        
        newCalendar[`week${i}`] = getEmptyWeek(startDate, endDate);
      }
    }

    const getEmptyWeek = (startDate, endDate) => {
      return {
        startDate,
        endDate,
        template : {isTemplated: false, weekNum: null},
        mon: { date: new Date(startDate), lessons: [] },
        tue: { date: new Date(startDate.getTime() + 1 * dayTime), lessons: [] },
        wed: { date: new Date(startDate.getTime() + 2 * dayTime), lessons: [] },
        thu: { date: new Date(startDate.getTime() + 3 * dayTime), lessons: [] },
        fri: { date: new Date(startDate.getTime() + 4 * dayTime), lessons: [] },
        sat: { date: new Date(startDate.getTime() + 5 * dayTime), lessons: [] },
        sun: { date: new Date(startDate.getTime() + 6 * dayTime), lessons: [] },
      };
    }

    if (localStorage.getItem('calendar') === null) {
      fillWithEmptyWeeks();
    } else {
      newCalendar = JSON.parse(localStorage.getItem('calendar'));
      const currentDay = today.valueOf();
      let mainWeekNumber = 3;

      for (let i = mainWeekNumber; i < 7; i++) {
        const week = newCalendar[`week${i}`];
        const startDay = new Date(week.startDate).valueOf();
        const endDay = new Date(week.endDate).valueOf();

        if (startDay <= currentDay && currentDay <= endDay) {
          mainWeekNumber = i;
          break;
        } else {
          mainWeekNumber++;
        }
      }

      if (mainWeekNumber === 7) {
        fillWithEmptyWeeks();
      } else if(mainWeekNumber > 3) {
        const weeksToCopy = [];

        for(let i = mainWeekNumber - 3; i < 7; i++) {
          weeksToCopy.push({ ...newCalendar[`week${i}`] });
        }

        for (let i = 0; i < mainWeekNumber - 3; i++) {
          const date = new Date(weeksToCopy[weeksToCopy.length - 1].startDate);
          date.setDate(date.getDate() + (7 + 7 * i));
          const [startDate, endDate] = getWeekDateRange(date);

          weeksToCopy.push(getEmptyWeek(startDate, endDate));
        }

        for(let i = 0; i < 7; i++) {
          newCalendar[`week${i}`] = weeksToCopy[i];
        }
      }
    }

    const scheduleTemplate = JSON.parse(localStorage.getItem('scheduleTemplate')) || null;

    if (scheduleTemplate) {
      injectScheduleTemplate(setCalendar, newCalendar, scheduleTemplate);
    } else {
      setCalendar(newCalendar);
    }
  }, []);

  useEffect(() => {
    if (calendar) {
      localStorage.setItem('calendar', JSON.stringify(calendar));
    }
  }, [calendar])

  useEffect(() => {
    if (calendar) {
      const week = calendar[currentWeekName];
      setCurrentWeek(week);
    }
  }, [calendar, currentWeekName]);

  const getWeekDateRange = (date) => {
    const localDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    const day = localDate.getDay() || 7; // Sunday -> 7
    const monday = new Date(localDate);
    monday.setDate(localDate.getDate() - day + 1);
    monday.setHours(0, 0, 0, 0); // Start of Monday
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999); // End of Sunday
    return [monday, sunday];
  };

  const startDate = new Date(currentWeek.startDate);
  const endDate = new Date(currentWeek.endDate);

  return (
    <div className="w-[80vw] max-w-[1560px] my-10 shadow-xl overflow-hidden rounded-2xl fade-in-up">
      <CalendarControlPanel
        currentWeekName={currentWeekName}
        setCurrentWeekName={setCurrentWeekName}
        setCalendar={setCalendar}
        startDate={startDate}
        endDate={endDate}
      />
      <Schedule
        setCalendar={setCalendar}
        currentWeek={currentWeek}
      />
    </div>
  );
}

export default Calendar;