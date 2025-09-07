import { useState } from "react";


function Task() {
  const [ checked, setChecked ] = useState(false);
  
  const checkTask = () => {
    setChecked(!checked);
    if (!checked) {
      document.querySelector('.task-title').style.textDecorationLine = 'line-through';
    } else {
      document.querySelector('.task-title').style.textDecorationLine = 'none';
    }
  }

  return (
    <div className="group flex justify-between gap-2 items-center text-[14px] font-normal text-[#6B7280] dark:text-[#9CA3AF] h-10 px-2.5 rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#2B3544] duration-150">
      <button 
        className="cursor-pointer hover:scale-110 duration-150"
        onClick={checkTask}
      >
        <img src={checked ? '/subject/CheckedIcon.svg' : '/subject/UncheckedIcon.svg'} alt="" className="w-5 h-5"/>
      </button>
      <div className="task-title w-[min(80%)]">
        gfhdfhdf
      </div>
      <button className="cursor-pointer hover:scale-110 duration-150 opacity-0 group-hover:opacity-100">
        <img src="/subject/DeleteIcon.svg" alt="" />
      </button>
    </div>
  );
}

export default Task;