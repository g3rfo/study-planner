import { useEffect, useState } from "react";

function PageButton({ iconName, title, curPage, setCurPage }) {
  const active = curPage === title;
  const activeColor =
    title === "Calendar"
      ? 'text-[#60A5FA]'
      : 'text-[#C084FC]';
  const buttonBg = 'rounded-[16px] bg-white dark:bg-[#4B5563]';
  const [iconSource, setIconSource] = useState();

  useEffect(() => {
    setIconSource(active ? `./images/active/${iconName}` : `./images/${iconName}`);
  }, [active, iconName]);

  return (
    <button
      className={`cursor-pointer flex justify-center items-center gap-1.5 w-30 h-9
        hover:rounded-[16px] hover:bg-white hover:dark:bg-[#4B5563]
        ${active ? buttonBg : 'bg-none'}
      `}
      onClick={() => setCurPage(title)}
    >
      <div>
        <img src={iconSource} alt="" className="w-6 h-6" />
      </div>
      <div
        className={`text-[18px] font-medium ${
          active
            ? activeColor
            : 'text-[#4B5563] dark:text-[#D1D5DB]'
        }`}
      >
        {title}
      </div>
    </button>
  );
}

export default PageButton;