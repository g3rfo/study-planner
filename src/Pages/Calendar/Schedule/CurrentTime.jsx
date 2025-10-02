import { useEffect, useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());
  const scheduleHeight = 956;
  const startTimeInSeconds = 21600; // 6:00
  const endTimeInSeconds = 79200; // 22:00
  
  const getCurrentTimeInSeconds = () => {
    return time.getHours() * 3600 +
    time.getMinutes() * 60 +
    time.getSeconds();
  }

  const currentTimeInSeconds = getCurrentTimeInSeconds();
  
  const getPosition = () => {
    return (currentTimeInSeconds - startTimeInSeconds) /
      (endTimeInSeconds - startTimeInSeconds) *
      scheduleHeight;
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(timerId);
  }, []);

  return (
    currentTimeInSeconds >= startTimeInSeconds &&
    currentTimeInSeconds <= endTimeInSeconds ? (
      <div
        className="absolute w-full border-t border-red-500"
        style={{ top: `${getPosition()}px` }}
      ></div>
    ) : null
  );
}

export default CurrentTime;