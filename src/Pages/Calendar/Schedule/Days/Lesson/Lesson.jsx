function Lesson({ top = 0, height = 0, color, title, time }) {

  return (
    <div 
      className={`absolute px-2 w-full rounded-lg bg-transparent border-[1px] box-border flex justify-between items-top text-[15px]
        font-medium text-[#1F2937] dark:text-white fade-in-up`}
      style={{
        top: `${top}px`,
        height: `${height}px`,
        backgroundColor: `${color.bg}`,
        borderColor: `${color.b}`
      }}
    >
      <div className="overflow-hidden max-w-[60%]">
        <h1
          className="whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {title}
        </h1>
      </div>
      <h1 className="font-light">{time}</h1>
    </div>
  );
}

export default Lesson;