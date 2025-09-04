function ControlPanelTitle({ iconSource, title }) {
  return (
    <div className="flex items-center gap-3 text-[18px] font-semibold text-[#1F2937] dark:text-white">
      <div className="flex justify-center items-center w-10 h-10 bg-[#F3E8FF] dark:bg-[#9333EA] rounded-xl">
        <img src={iconSource} alt="" className="w-6 h-6" />
      </div>
      {title}
    </div>
  );
}

export default ControlPanelTitle;