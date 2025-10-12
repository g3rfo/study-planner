import { closePopup } from "../Hooks/usePopup";
import { shakeAnimation } from "./shakeAnimation";

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
  const colorInput = Array.from(document.getElementsByName('lesson-color-option'));
  let selectedColor = colorInput.find(option => option.checked)?.value;

  if (!selectedColor) {
    shakeAnimation(document.getElementById('lesson-color'));
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
    let weekNum = -1;
    const week = Object.values(calendar).slice(0, 7).find(week => {
      const startDate = new Date(week.startDate);
      const endDate = new Date(week.endDate);
      weekNum++;
      return date.getTime() >= startDate.getTime() &&
        date.getTime() <= endDate.getTime();
    });

    if (week) {
      const day = Object.values(week).find(day => {
        if (typeof day === "object" && day !== null && day.date) {
          const dayDate = new Date(day.date);
          return dayDate.getDate() === date.getDate();
        }
        return false;
      });

      // Save name of day
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();
      
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