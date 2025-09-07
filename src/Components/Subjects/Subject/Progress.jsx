function Progress() {
  return (
    <div className="">
      <div className="flex justify-between text-[14px] font-medium">
        <h1 className="text-[#6B7280] dark:text-[#9CA3AF]">Progress</h1>
        <div className="text-[#4B5563] dark:text-[#D1D5DB]">1/5</div>
      </div>
      <div className="flex overflow-hidden rounded-xl">
        <progress 
          className="w-full h-2 [&::-webkit-progress-bar]:bg-[#374151] [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-[#4ADE80] [&::-webkit-progress-value]:to-[#22C55E]"
          max={100} value={20}/>
      </div>
    </div>
  );
}

export default Progress;