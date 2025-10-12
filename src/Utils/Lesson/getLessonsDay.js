export const getLessonsDay = (week, date) => {
  const day = Object.values(week).find(day => {
    if (typeof day === "object" && day !== null && day.date) {
      const dayDate = new Date(day.date);
      return dayDate.getDate() === date.getDate();
    }
      return false;
  });

  const dayName = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase();

  return [day, dayName];
}