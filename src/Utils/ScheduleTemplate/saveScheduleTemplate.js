export const saveScheduleTemplate = (calendar, firstWeek, lastWeek) => {
  let scheduleTemplate = {};
  let weekNum = 0;

  for (let i = firstWeek; i <= lastWeek; i++) {
    scheduleTemplate = {...scheduleTemplate, [`week${weekNum}`] : calendar[`week${i}`]};
    weekNum++;
  }

  weekNum = 0;

  for (let i = 3; i < 7; i++) {
    if (firstWeek <= i && i <= lastWeek) {
      calendar[`week${i}`].template.isTemplated = true;
      calendar[`week${i}`].template.weekNum = weekNum % (lastWeek - firstWeek + 1);
      weekNum++;
      continue;
    }

    if (calendar[`week${i}`].template.isTemplated) {
      calendar[`week${i}`].template.isTemplated = false;
      calendar[`week${i}`].template.weekNum = null;
    }
  }

  localStorage.setItem('scheduleTemplate', JSON.stringify(scheduleTemplate));
  return [calendar, scheduleTemplate];
}