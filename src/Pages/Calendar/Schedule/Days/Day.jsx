import Lesson from "./Lesson/Lesson";

function Day({ lessons }) {
  const scheduleHeight = 956;
  const startTimeInSeconds = 21600; // 6:00
  const endTimeInSeconds = 79200; // 22:00

  const getCurrentTimeInSeconds = (time) => {
    return time.getHours() * 3600 +
    time.getMinutes() * 60 +
    time.getSeconds();
  }

  const getPlacingParams = (startTime, endTime) => {
    const start = getCurrentTimeInSeconds(new Date(startTime));
    const end = getCurrentTimeInSeconds(new Date(endTime));

    const totalSeconds = endTimeInSeconds - startTimeInSeconds;
    const height = ((end - start) / totalSeconds) * scheduleHeight;
    const top = ((start - startTimeInSeconds) / totalSeconds) * scheduleHeight;

    return { top, height };
  }

  const getFormatedTime = (startTime) => {
    const time = new Date(startTime);
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  return ( 
    <div
      className="relative w-1/7 h-full border-r border-[#dde1e9]
        dark:border-[#6d6f72] box-border"
    >
      {lessons?.map(lesson => {
        const placingParams = getPlacingParams(lesson.startTime, lesson.endTime);

        return (
          <Lesson
            key={lesson.startTime}
            top={placingParams.top}
            height={placingParams.height}
            color={JSON.parse(lesson.color)}
            title={lesson.title}
            time={`${getFormatedTime(lesson.startTime)} - ${getFormatedTime(lesson.endTime)}`}
          />
        );
      })}
    </div>
  );
}

export default Day;