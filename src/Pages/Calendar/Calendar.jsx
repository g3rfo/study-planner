import { useEffect, useState } from "react";
import CalendarControlPanel from "./ControlPanel/CalendarControlPanel"
import Schedule from "./Schedule/Schedule";

// {
//   week0 : {
//     startDate : null,
//     endDate : null,
//     mon : {
//       date: null,
//       lessons : [
//         {
//           startTime: null,
//           endTime: null,
//           title: null,
//           description: null,
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

function Calendar() {
  const [calendar, setCalendar] = useState(null);
  const [currentWeekName, setCurrentWeekName] = useState('week3');
  const [currentWeek, setCurrentWeek] = useState({});
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  useEffect(() => {
    const today = new Date();
    let newCalendar = {};
    
    const fillWithEmptyWeeks = () => {
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + (-21 + 7 * i));
        
        const [startDate, endDate] = getWeekDateRange(date);
        const dayTime = 24 * 60 * 60 * 1000;
        
        newCalendar[`week${i}`] = {
          startDate,
          endDate,
          mon: { date: new Date(startDate), lessons: [] },
          tue: { date: new Date(startDate.getTime() + 1 * dayTime), lessons: [] },
          wed: { date: new Date(startDate.getTime() + 2 * dayTime), lessons: [] },
          thu: { date: new Date(startDate.getTime() + 3 * dayTime), lessons: [] },
          fri: { date: new Date(startDate.getTime() + 4 * dayTime), lessons: [] },
          sat: { date: new Date(startDate.getTime() + 5 * dayTime), lessons: [] },
          sun: { date: new Date(startDate.getTime() + 6 * dayTime), lessons: [] },
        };
      }
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
          const date = new Date(today);
          date.setDate(date.getDate() + (7 + 7 * i));
          
          const [startDate, endDate] = getWeekDateRange(date);

          weeksToCopy.push({
            startDate,
            endDate,
            mon: { date: startDate.getDate(), lessons: [] },
            tue: { date: startDate.getDate() + 1, lessons: [] },
            wed: { date: startDate.getDate() + 2, lessons: [] },
            thu: { date: startDate.getDate() + 3, lessons: [] },
            fri: { date: startDate.getDate() + 4, lessons: [] },
            sat: { date: startDate.getDate() + 5, lessons: [] },
            sun: { date: startDate.getDate() + 6, lessons: [] },
          });
        }

        for(let i = 0; i < 7; i++) {
          newCalendar[`week${i}`] = weeksToCopy[i];
        }
      }
    }

    setCalendar(newCalendar);
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
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + 1); // Monday
    const endOfWeek = new Date(date);
    endOfWeek.setDate(date.getDate() - date.getDay() + 7); // Sunday

    return [startOfWeek, endOfWeek];
  }

  const startDate = currentWeek.startDate ? new Date(currentWeek.startDate) : null;
  const endDate = currentWeek.endDate ? new Date(currentWeek.endDate) : null;

  return (
    <div className="w-[80vw] max-w-[1560px] my-10 shadow-xl overflow-hidden rounded-2xl fade-in-up">
      <CalendarControlPanel
        currentWeekName={currentWeekName}
        setCurrentWeekName={setCurrentWeekName}
        startDate={startDate ? `${monthNames[startDate.getMonth()]} ${startDate.getDate()}` : ""}
        endDate={endDate ? `${monthNames[endDate.getMonth()]} ${endDate.getDate()}` : ""}
      />
      <Schedule currentWeek={currentWeek}/>
    </div>
  );
}

export default Calendar;