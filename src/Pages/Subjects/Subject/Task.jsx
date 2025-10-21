import { useState } from "react";

function Task({ title, status, subjectKey, setTasks}) {
  const [ checked, setChecked ] = useState(status);
  
  const updateSubjectTasks = (updateFn) => {
    const subjects = JSON.parse(localStorage.getItem("subjects")) || {};
    const subject = subjects[subjectKey];
    if (!subject) return;

    const tasks = subject.tasks || [];
    const updatedTasks = updateFn([...tasks]); // work on a copy

    subject.tasks = updatedTasks;
    subjects[subjectKey] = subject;

    localStorage.setItem("subjects", JSON.stringify(subjects));
    setTasks(updatedTasks);
  };

  const checkTask = () => {
    setChecked(!checked);
    updateSubjectTasks((tasks) => {
      const taskIndex = tasks.findIndex(task => task.title === title);
      if (taskIndex !== -1) {
        tasks[taskIndex].done = !tasks[taskIndex].done;
      }
      return tasks;
    });
  };

  const deleteTask = () => {
    updateSubjectTasks((tasks) => tasks.filter(task => task.title !== title));
  };

  return (
    <div
      className="group flex justify-between gap-2 items-center text-[16px] font-semibold
        text-[#6B7280] dark:text-[#9CA3AF] h-10 px-2.5 rounded-lg hover:bg-[#F9FAFB]
        dark:hover:bg-[#2B3544] duration-150"
    >
      <button 
        className="cursor-pointer hover:scale-110 duration-150 outline-none"
        onClick={checkTask}
      >
        <img
          src={checked ? './images/subject/CheckedIcon.svg' : './images/subject/UncheckedIcon.svg'} 
          alt=""
          className="w-5 h-5"
        />
      </button>
      <div className={`w-[min(80%)] ${checked ? 'line-through' : null}`}>
        {title}
      </div>
      <button
        className="cursor-pointer hover:scale-110 duration-150 opacity-0 group-hover:opacity-100 outline-none"
        onClick={deleteTask}
      >
        <img 
          src="./images/subject/DeleteIcon.svg"
          alt=""
        />
      </button>
    </div>
  );
}

export default Task;