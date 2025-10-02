function TimeRange({ start, end, time }) {
  return (
    <div
      className={`relative px-3 row-start-${start} row-end-${end} content-start
        border-t border-[#dde1e9] dark:border-[#6d6f72]`}
    >
      <p className="text-[14px] text-end font-extralight">{time}</p>
      <div className="absolute top-0 right-0 h-full flex flex-col justify-between items-end">
        <div className="w-3 border-t border-[#dde1e9] dark:border-[#6d6f72]" />
        <div className="w-2 border-t border-[#dde1e9] dark:border-[#6d6f72]" />
        <div className="w-3 border-t border-2 border-[#dde1e9] dark:border-[#6d6f72]" />
        <div className="w-2 border-t border-[#dde1e9] dark:border-[#6d6f72]" />
        <div className="w-3 border-t border-[#dde1e9] dark:border-[#6d6f72]" />
      </div>
    </div>
  );
}

export default TimeRange;