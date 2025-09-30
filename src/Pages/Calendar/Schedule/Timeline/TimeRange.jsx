function TimeRange({ start, end, time }) {
  return (
    <div
      className={`p-1 row-start-${start} row-end-${end} content-start
        border-t border-[#dde1e9] dark:border-[#6d6f72]`}
    >
      <p className="text-[14px] text-end font-extralight">{time}</p>
    </div>
  );
}

export default TimeRange;