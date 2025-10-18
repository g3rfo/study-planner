import { generateLessonsID } from "../Lesson/generateLessonsID";

export const injectScheduleTemplate = (setCalendar, calendar, scheduleTemplate) => {
  let templateWeekNum = 0;
  const templateLength = Object.keys(scheduleTemplate).length;
  const newCalendar = calendar;

  const increaseWeekNum = () => {
    templateWeekNum = (templateWeekNum + 1) % templateLength;
  }

  const updateLesson = (day, lesson) => {
    const date = new Date(day);
    const startTime = new Date(lesson.startTime);
    startTime.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    const endTime = new Date(lesson.endTime);
    endTime.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());

    const updatedLesson = { ...lesson };
    updatedLesson.startTime = startTime;
    updatedLesson.endTime = endTime;
    updatedLesson.id = generateLessonsID(startTime);

    return updatedLesson;
  }

  for (let i = 3; i < 7; i++) {
    const week = calendar[`week${i}`];

    if (week.template.isTemplated) {
      templateWeekNum = week.template.weekNum;
    } else {
      const templateWeek = scheduleTemplate[`week${templateWeekNum}`];

      for (let key in week) {
        if (key === 'template' || key === 'startDate' || key === 'endDate') continue;
        const day = week[key];
        const lessons = day.lessons ?? [];
        const lessonsLength = lessons.length;
        const templateLessons = templateWeek?.[key]?.lessons ?? [];
        const newLessons = [...lessons];

        templateLessons.forEach(templateLesson => {
          const newTemplateLesson = updateLesson(day.date, templateLesson);

          const templateStartTime = new Date(newTemplateLesson.startTime);
          const templateEndTime = new Date(newTemplateLesson.endTime);
          let startIdx = 0;

          if (lessonsLength > 1) {
            for (let j = startIdx + 1; j < lessonsLength; j++) {
              const prevEnd = new Date(lessons[j - 1].endTime);
              const nextStart = new Date(lessons[j].startTime);

              if (prevEnd <= templateStartTime && templateEndTime <= nextStart) {
                newLessons.push(newTemplateLesson);
                startIdx = j - 1;
                break;
              }
            }
          } else {
            if (lessonsLength === 1) {
              const start = new Date(lessons[0].startTime);
              const end = new Date(lessons[0].endTime);
  
              if (end <= templateStartTime || templateEndTime <= start) {
                newLessons.push(newTemplateLesson);
              }
            } else {
              newLessons.push(newTemplateLesson);
            }
          }
        })

        newLessons.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
        day.lessons = newLessons;
        week[key] = day;
      }
    }

    week.template.isTemplated = true;
    week.template.weekNum = templateWeekNum;
    newCalendar[`week${i}`] = week;
    increaseWeekNum();
  }

  setCalendar(newCalendar);
}