function Progress({ doneTasksNum, tasksNum }) {

  return (
    <div className="">
      <div className="flex justify-between text-[14px] font-medium">
        <h1 className="text-[#6B7280] dark:text-[#9CA3AF]">
          Progress
        </h1>
        <div className="text-[#4B5563] dark:text-[#D1D5DB]">
          {`${doneTasksNum}/${tasksNum}`}
        </div>
      </div>
      <div className="flex overflow-hidden rounded-xl">
        <div className="w-full h-2 bg-[#E5E7EB] dark:bg-[#374151] rounded overflow-hidden">
          <div
            className={
              `h-2 bg-gradient-to-r from-[#4ADE80] to-[#22C55E] transition-all
              duration-500 ease-in-out`
            }
            style={{ width: tasksNum === 0 ? "0%" : `${(doneTasksNum / tasksNum) * 100}%` }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;