import ArrowButton from "./ArrowButton";

function SwitchDateBar({ currentWeekName, setCurrentWeekName, startDate = '', endDate = ''}) {
  const weekNum = parseInt(currentWeekName.replace('week', ''), 10);
  const weeksPoint = [];

  for (let i = 0; i < 7; i++) {
    weeksPoint.push(weekNum === i);
  }

  return ( 
    <div className="p-1 h-11 flex items-center gap-2 rounded-lg bg-[#F3F4F6] dark:bg-[#1F2937]">
      <ArrowButton
        isDisabled={currentWeekName === 'week0'}
        direction="Left"
        onClick={() => {
          setCurrentWeekName(`week${weekNum - 1}`);
        }} 
          />
            <div className="relative w-40 text-center text-[16px] text-[#374151] dark:text-white">
              {startDate ? startDate : ''} - {endDate ? endDate : ''}
              <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-fit h-[6px] flex gap-[6px] items-center">
                {weeksPoint.map((point, idx) => (
                  <div key={idx} className="w-[6px] h-[6px] flex justify-center items-center">
                    <div className={`${point ? 'w-[6px] h-[6px]' : 'w-1 h-1'} rounded-full bg-[#374151] dark:bg-[#F3F4F6]`} />
                  </div>
                ))}
              </div>
            </div>
            <ArrowButton
        isDisabled={currentWeekName === 'week6'}
        direction="Right"
        onClick={() => {
          setCurrentWeekName(`week${weekNum + 1}`);
        }} 
      />
    </div>
  );
}

export default SwitchDateBar;