import { useEffect, useRef, useState } from "react";
import { shakeAnimation } from "../../../../Utils/shakeAnimation"
function ChooseWeeksAsSchedule({ choosedWeek }) {
  const [weeksStatus, setWeeksStatus] = useState([]);
  const chooseWeeks = useRef(null);

  useEffect(() => {
    setWeeksStatus([false, false, false, true, false, false, false]);
  }, []);

  const handleCheck = (index) => {
    let min = weeksStatus.findIndex(week => week);
    let max = weeksStatus.findLastIndex(week => week);

    if (choosedWeek === 'From') {
      if (index <= max) min = index;
      else shakeAnimation(chooseWeeks.current);
    } else if (choosedWeek === 'To') {
      if (index >= min) max = index;
      else shakeAnimation(chooseWeeks.current);
    }

    const newStatus = [];

    for (let i = 0; i < 7; i++) {
      const status = i >= min && i <= max;
      newStatus.push(status);
    }

    setWeeksStatus(newStatus);
  }

  return (
    <div
      ref={chooseWeeks}
      className="h-11 mt-2 transition-transform"
    >
      <div className="w-full h-full flex gap-2 items-center transition-all">
        {weeksStatus.map((isActive, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleCheck(index)}
            className={`w-12 h-8 rounded-md border duration-150 
              ${isActive 
                ? 'bg-blue-500 border-blue-600 text-white' 
                : 'bg-gray-100 dark:bg-[#1F2937] border-gray-300 dark:border-[#4B5563] text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-[#374151]'
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChooseWeeksAsSchedule;