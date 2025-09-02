function PageButton({ iconSource, title, curPage, setCurPage}) {
  let isActive = curPage === title;

  return (
    <button
      className={`cursor-pointer flex justify-center items-center gap-1.5 w-30 h-9
        ${isActive ? 'rounded-[16px] bg-white dark:bg-[#4B5563]' : 'bg-none'}`
      } 
      onClick={() => setCurPage(title)}
    >
      <div>
        <img src={iconSource} alt="" className="w-6 h-6" />
      </div>
      <div className={`text-[18px] font-medium ${isActive ? 'text-[#2563EB] dark:text-[#60A5FA]' : 'text-[#4B5563] dark:text-[#D1D5DB]'}`}>{title}</div>
    </button>
  );
}

export default PageButton;