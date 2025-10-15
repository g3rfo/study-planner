import { useRef } from "react";
import { shakeAnimation } from "../../../../Utils/shakeAnimation"
function ChooseWeeksAsSchedule({ option, selectedWeeks, setSelectedWeeks }) {
  const chooseWeeks = useRef(null);

  const handleCheck = (index) => {
    let min = selectedWeeks.findIndex(week => week);
    let max = selectedWeeks.findLastIndex(week => week);

    if (option === 'From') {
      if (index <= max) min = index;
      else shakeAnimation(chooseWeeks.current);
    } else if (option === 'To') {
      if (index >= min) max = index;
      else shakeAnimation(chooseWeeks.current);
    }

    const newStatus = [];

    for (let i = 0; i < 7; i++) {
      const status = i >= min && i <= max;
      newStatus.push(status);
    }

    setSelectedWeeks(newStatus);
  }

  return (
    <div
      ref={chooseWeeks}
      className="h-11 mt-2 transition-transform"
    >
      <div className="w-full h-full flex gap-2 items-center transition-all">
        {selectedWeeks.map((isActive, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleCheck(index)}
            className={`w-12 h-8 rounded-md border duration-150 cursor-pointer
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