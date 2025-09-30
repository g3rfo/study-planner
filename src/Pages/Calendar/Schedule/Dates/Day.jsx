function Day({ day, date }) {
  return (
    <div 
      className='h-full w-1/7 flex flex-col items-center justify-center text-[16px]
        font-semibold text-[#1F2937] dark:text-white bg-[#abcefd] dark:bg-[#1F2D4D]
        border-r border-[#dde1e9] dark:border-[#6d6f72]'
    >
      {day}
      <div className="w-8 border-t-[1px] border-[#1F2937] dark:border-white"></div>
      {date}
    </div>
  );
}

export default Day;