import ArrowButton from "./ArrowButton";

function SwitchDateBar() {
  return ( 
    <div className="p-1 h-11 flex items-center gap-2 rounded-lg bg-[#F3F4F6] dark:bg-[#1F2937]">
      <ArrowButton direction="Left"/>
      <div className="w-40 text-center text-[16px] text-[#374151] dark:text-white">Text</div>
      <ArrowButton direction="Right"/>
    </div>
  );
}

export default SwitchDateBar;