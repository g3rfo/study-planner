import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../Hooks/useTheme";
import PageButton from "./PageButton";

function Navbar() {
  const location = useLocation();

  const [ curPage, setCurPage ] = useState(() => {
    return location.pathname.startsWith("/subjects") ? 'Subjects' : 'Calendar';
  });
  const { theme, toggleTheme } = useTheme();

  return ( 
    <div className="flex justify-center bg-white dark:bg-[#1f2937] shadow-sm box-border">
      <nav className="flex justify-between items-center h-20 w-[min(80vw,1560px)]">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-transparent bg-clip-text">
          StudyPlanner
        </div>
        <div className="flex justify-between items-center w-65 h-12 px-2 rounded-l-4xl rounded-r-4xl bg-[#F3F4F6] dark:bg-[#374151] shadow-xs">
          <Link to="/">
            <PageButton iconName="CalendarIcon.svg" title="Calendar" curPage={curPage} setCurPage={setCurPage} />
          </Link>
          <Link to="/subjects">
            <PageButton iconName="SubjectsIcon.svg" title="Subjects" curPage={curPage} setCurPage={setCurPage} />
          </Link>
        </div>
        <button 
          className="flex justify-center items-center w-10 h-10 bg-[#F3F4F6] dark:bg-[#374151] rounded-full cursor-pointer"
          onClick={toggleTheme}
        >
          <div className="flex justify-center items-center w-full h-full transition-all duration-200 hover:scale-120">
            <img src={theme === 'dark' ? '/navbar/DarkThemeIcon.svg' : '/navbar/LightThemeIcon.svg'} alt="" className="w-6 h-6"/>
            </div>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;