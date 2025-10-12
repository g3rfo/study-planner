export const generateLessonsID = (startTime) => {
  const date = startTime.getDate();
  const hours = startTime.getHours();
  const minutes = startTime.getMinutes();
  const id = `${date < 10 ? `0${date}` : date}${hours < 10 ? `0${hours}` : hours}${minutes < 10 ? `0${minutes}` : minutes}`
  
  return id;
}