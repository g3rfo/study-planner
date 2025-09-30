import Dates from "./Dates/Dates";
import Days from "./Days/Days";
import Timeline from "./Timeline/Timeline";

function Schedule() {
  return (
    <div
      className="w-full flex h-180 bg-white dark:bg-[#1F2937] overflow-hidden
        border-t border-[#dde1e9] dark:border-[#6d6f72]"
    >
      <div
        className="min-w-[75px] h-full flex flex-col text-[16px] font-semibold
          text-[#1F2937] dark:text-white bg-[#abcefd] dark:bg-[#1F2D4D]
          border-r border-[#dde1e9] dark:border-[#6d6f72]"
      >
        <Timeline />
      </div>
      <div className="h-full overflow-x-auto custom-scrollbar">
        <div className="w-[2080px] h-full flex flex-col">
          <Dates />
          <Days />
        </div>
      </div>
    </div>
  );
}

export default Schedule;