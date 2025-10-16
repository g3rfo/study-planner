export const saveScheduleTemplate = (calendar, firstWeek, lastWeek) => {
  let scheduleTemplate = {};
  let weekNum = 0;

  for (let i = firstWeek; i <= lastWeek; i++) {
    scheduleTemplate = {...scheduleTemplate, [`week${weekNum}`] : calendar[`week${i}`]};
    weekNum++;
  }

  console.log(scheduleTemplate);
  localStorage.setItem('scheduleTemplate', JSON.stringify(scheduleTemplate));
}