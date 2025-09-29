function Day({ day, date }) {
  return (
    <div className="w-full h-1/7 flex flex-col gap-1 items-center justify-center text-[16px] font-semibold text-[#1F2937] dark:text-white border-t border-[#dde1e9] dark:border-[#6d6f72] box-border">
      {day}
      <div className="w-8 border-t-[1px] border-[#1F2937] dark:border-white"></div>
      {date}
    </div>
  );
}

export default Day;