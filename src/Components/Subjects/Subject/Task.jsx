import { useState } from "react";

function Task({ title, status, subjectKey, setTasks}) {
  const [ checked, setChecked ] = useState(status);
  
  const checkTask = () => {
    setChecked(!checked);

    let subjects = JSON.parse(localStorage.getItem('subjects'));
    const subject = subjects[subjectKey];
    const taskIndex = subject.findIndex(task => task.title === title);
    if (taskIndex !== -1) {
      subject[taskIndex].done = !subject[taskIndex].done;
      subjects[subjectKey] = subject;
      localStorage.setItem('subjects', JSON.stringify(subjects));
    }

    setTasks([...subject]);
  }

  return (
    <div className="group flex justify-between gap-2 items-center text-[14px] font-normal text-[#6B7280] dark:text-[#9CA3AF] h-10 px-2.5 rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#2B3544] duration-150">
      <button 
        className="cursor-pointer hover:scale-110 duration-150"
        onClick={checkTask}
      >
        <img src={checked ? '/subject/CheckedIcon.svg' : '/subject/UncheckedIcon.svg'} alt="" className="w-5 h-5"/>
      </button>
      <div className={`w-[min(80%)] ${checked ? 'line-through' : null}`}>
        {title}
      </div>
      <button className="cursor-pointer hover:scale-110 duration-150 opacity-0 group-hover:opacity-100">
        <img src="/subject/DeleteIcon.svg" alt="" />
      </button>
    </div>
  );
}

export default Task;