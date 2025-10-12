export const getLessonsWeekNum = (calendar, date) => {
  let weekNum = -1;
  const week = Object.values(calendar).slice(0, 7).find(week => {
    const startDate = new Date(week.startDate);
    const endDate = new Date(week.endDate);
    weekNum++;
    return date.getTime() >= startDate.getTime() &&
      date.getTime() <= endDate.getTime();
  });

  return [week, weekNum];
}