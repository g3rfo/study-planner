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
    
    if (localStorage.getItem('calendar') === null) {
      
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + (-21 + 7 * i));
        
        const [startDate, endDate] = getWeekDateRange(date);

        newCalendar[`week${i}`] = {
          startDate,
          endDate,
          mon: { date: null, lessons: [] },
          tue: { date: null, lessons: [] },
          wed: { date: null, lessons: [] },
          thu: { date: null, lessons: [] },
          fri: { date: null, lessons: [] },
          sat: { date: null, lessons: [] },
          sun: { date: null, lessons: [] },
        };
      }
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

      console.log('MainWeekNumber: ', mainWeekNumber);

      if(mainWeekNumber > 3) {
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
            mon: { date: null, lessons: [] },
            tue: { date: null, lessons: [] },
            wed: { date: null, lessons: [] },
            thu: { date: null, lessons: [] },
            fri: { date: null, lessons: [] },
            sat: { date: null, lessons: [] },
            sun: { date: null, lessons: [] },
          });
        }

        for(let i = 0; i < 7; i++) {
          newCalendar[`week${i}`] = weeksToCopy[i];
        }
      }
    }

    localStorage.setItem('calendar', JSON.stringify(newCalendar));
    setCalendar(newCalendar);
  }, []);

  useEffect(() => {
    if (calendar) {
      const week = calendar[currentWeekName];
      console.log(week);
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