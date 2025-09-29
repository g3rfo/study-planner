function ControlPanelTitle({ iconSource, title, bg }) {
  return (
    <div className="flex items-center gap-3 text-[20px] font-medium text-[#1F2937] dark:text-white">
      <div className={`flex justify-center items-center w-10 h-10 ${bg} rounded-xl`}>
        <img src={iconSource} alt="" className="w-6 h-6" />
      </div>
      {title}
    </div>
  );
}

export default ControlPanelTitle;