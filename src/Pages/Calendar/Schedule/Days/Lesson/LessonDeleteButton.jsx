import SmallButton from "../../../../../Components/Common/SmallButton";
import { getLessonsDay } from "../../../../../Utils/Lesson/getLessonsDay";
import { getLessonsWeekNum } from "../../../../../Utils/Lesson/getLessonsWeek";

function LessonDeleteButton({ setCalendar, id, date}) {
  const deleteLesson = () => {
    console.log('Procces of deleting')

    const calendar = JSON.parse(localStorage.getItem('calendar'));

    const lessonDate = new Date(date);
    lessonDate.setDate(id.slice(0, 2), id.slice(2, 4), id.slice(4, 6))

    console.log(lessonDate);

    const [week, weekNum] = getLessonsWeekNum(calendar, lessonDate);

    if (week) {
      const [day, dayName] = getLessonsDay(week, lessonDate);
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