import { useState } from "react";
import { Link } from "react-router-dom";
import { UseTheme } from "../../Hooks/UseTheme";
import PageButton from "./PageButton";

function Navbar() {
  const [curPage, setCurPage] = useState('Calendar');
  const { theme, toggleTheme } = UseTheme();

  return ( 
    <div className="flex justify-center bg-white dark:bg-[#1f2937] shadow-sm">
      <nav className="flex justify-between items-center h-20 w-[min(80%,1560px)]">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-transparent bg-clip-text">
          StudyPlanner
        </div>
        <div className="flex justify-between items-center w-65 h-12 px-2 rounded-l-4xl rounded-r-4xl bg-[#F3F4F6] dark:bg-[#374151] shadow-xs">
          <Link to="/">
            <PageButton iconSource="/CalendarIcon.svg" title="Calendar" curPage={curPage} setCurPage={setCurPage} />
          </Link>
          <Link to="/subjects">
            <PageButton iconSource="/SubjectsIcon.svg" title="Subjects" curPage={curPage} setCurPage={setCurPage} />
          </Link>
        </div>
        <button 
          className="flex justify-center items-center w-9 h-9 bg-[#F3F4F6] dark:bg-[#374151] rounded-full cursor-pointer transition-all duration-200 hover:scale-110"
          onClick={toggleTheme}
        >
          <img src={theme === 'dark' ? '/DarkThemeIcon.svg' : '/LightThemeIcon.svg'} alt="" className="w-5 h-5"/>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;