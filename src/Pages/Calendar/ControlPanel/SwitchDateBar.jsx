import ArrowButton from "./ArrowButton";

function SwitchDateBar({ currentWeekName, setCurrentWeekName, startDate, endDate }) {
  const weekNum = parseInt(currentWeekName.replace('week', ''), 10);

  return ( 
    <div className="p-1 h-11 flex items-center gap-2 rounded-lg bg-[#F3F4F6] dark:bg-[#1F2937]">
      <ArrowButton
        isDisabled={currentWeekName === 'week0'}
        direction="Left"
        onClick={() => {
          setCurrentWeekName(`week${weekNum - 1}`);
        }} 
      />
      <div className="w-40 text-center text-[16px] text-[#374151] dark:text-white">
        {startDate} - {endDate}
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