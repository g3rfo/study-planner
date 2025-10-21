import { closePopup } from "../../Hooks/usePopup";
import { getLessonsWeekNum } from "./getLessonsWeek";
import { shakeAnimation } from "../shakeAnimation";
import { getLessonsDay } from "./getLessonsDay";
import { generateLessonsID } from "./generateLessonsID";

export const saveNewLesson = (setCalendar) => {
  let isValid = true;

  // name
  const nameInput = document.getElementById('lesson-name');
  const name = nameInput.value;
  if (!name) {
    shakeAnimation(nameInput);
    nameInput.placeholder = 'Enter at least one letter';
    isValid = false;
  }

  // date
  const dateInput = document.getElementById('lesson-date');
  const date = new Date(dateInput.value);

  // start time
  const startTimeInput = document.getElementById('lesson-start-time');
  const startTime = new Date(date);
  const [startHours, startMinutes] = startTimeInput.value.split(':').map(Number);
  startTime.setHours(startHours, startMinutes, 0, 0);

  if (!startHours && !startMinutes) {
    shakeAnimation(startTimeInput);
    isValid = false;
  }

  // end time
  const endTimeInput = document.getElementById('lesson-end-time');
  const endTime = new Date(date);
  const [endHours, endMinutes] = endTimeInput.value.split(':').map(Number);
  endTime.setHours(endHours, endMinutes, 0, 0);

  if ((!endHours && !endMinutes) || endTime.getTime() < startTime.getTime() + 20 * 1000 * 60) {
    shakeAnimation(endTimeInput);
    isValid = false;
  }

  // color
  const colorInput = Array.from(document.getElementsByName('color-option'));
  let selectedColor = colorInput.find(option => option.checked)?.value;

  if (!selectedColor) {
    shakeAnimation(document.getElementById('color-form'));
    isValid = false;
  }

  // link and notes
  const linkInput = document.getElementById('lesson-link');
  const notesInput = document.getElementById('lesson-notes');
  const link = linkInput.value;
  const notes = notesInput.value;

  // check if there is already lesson in this time
  if (isValid) {
    const calendar = JSON.parse(localStorage.getItem('calendar'));
    const [week, weekNum] = getLessonsWeekNum(calendar, date);

    if (week) {
      const [day, dayName] = getLessonsDay(week, date);
      const lessons = [...day.lessons];
      let hasConflict = false;

      for (let lesson of lessons) {
        const lessonStart = new Date(lesson.startTime);
        const lessonEnd = new Date(lesson.endTime);

        if (startTime < lessonEnd && endTime > lessonStart) {
          hasConflict = true;
          break;
        }
      }

      if (hasConflict) {
        shakeAnimation(dateInput);
        shakeAnimation(startTimeInput);
        shakeAnimation(endTimeInput);
      } else {
        lessons.push({
          id: generateLessonsID(new Date(startTime)),
          startTime: startTime.toISOString(),
          endTime: endTime.toISOString(),
          title: name,
          notes: notes,
          link: link,
          color: selectedColor,
        });
        lessons.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
        day.lessons = lessons;
        week[dayName] = day;
        calendar[`week${weekNum}`] = week;

        closePopup();
        setCalendar(calendar);
      }
    } 
  }
}