import SmallButton from "../../../../../Components/Common/SmallButton";
import { getLessonsDay } from "../../../../../Utils/Lesson/getLessonsDay";
import { getLessonsWeekNum } from "../../../../../Utils/Lesson/getLessonsWeek";

function LessonDeleteButton({ setCalendar, id }) {
  const deleteLesson = () => {
    const calendar = JSON.parse(localStorage.getItem('calendar'));

    const date = new Date();
    date.setDate(id.slice(0, 2), id.slice(2, 4), id.slice(4, 6))

    const [week, weekNum] = getLessonsWeekNum(calendar, date);

    if (week) {
      const [day, dayName] = getLessonsDay(week, date);
      const lessons = [...day.lessons];
      
      const index = lessons.findIndex(lesson => lesson.id === id);
      lessons.splice(index, 1);

      day.lessons = lessons;
      week[dayName] = day;
      calendar[`week${weekNum}`] = week;
      setCalendar(calendar);
    }
  }

  return (
    <SmallButton
      src='./images/DeleteIcon.svg'
      func={deleteLesson}
      w={6}
      hover='scale'
    />
  );
}

export default LessonDeleteButton;