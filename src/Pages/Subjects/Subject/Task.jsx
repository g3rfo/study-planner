import { useState } from "react";

function Task({ title, status, subjectKey, setTasks}) {
  const [ checked, setChecked ] = useState(status);
  
  const updateSubjectTasks = (updateFn) => {
    const subjects = JSON.parse(localStorage.getItem("subjects")) || {};
    const subject = subjects[subjectKey] || [];

    const updatedSubject = updateFn([...subject]); // work on a copy

    subjects[subjectKey] = updatedSubject;
    localStorage.setItem("subjects", JSON.stringify(subjects));

    setTasks(updatedSubject);
  };

  const checkTask = () => {
    setChecked(!checked);
    updateSubjectTasks((subject) => {
      const taskIndex = subject.findIndex(task => task.title === title);
      if (taskIndex !== -1) {
        subject[taskIndex].done = !subject[taskIndex].done;
      }
      return subject;
    });
  };

  const deleteTask = () => {
    updateSubjectTasks((subject) => subject.filter(task => task.title !== title));
  };

  return (
    <div
      className="group flex justify-between gap-2 items-center text-[16px] font-semibold
        text-[#6B7280] dark:text-[#9CA3AF] h-10 px-2.5 rounded-lg hover:bg-[#F9FAFB]
        dark:hover:bg-[#2B3544] duration-150"
    >
      <button 
        className="cursor-pointer hover:scale-110 duration-150"
        onClick={checkTask}
      >
        <img
          src={checked ? '/subject/CheckedIcon.svg' : '/subject/UncheckedIcon.svg'} 
          alt=""
          className="w-5 h-5"
        />
      </button>
      <div className={`w-[min(80%)] ${checked ? 'line-through' : null}`}>
        {title}
      </div>
      <button
        className="cursor-pointer hover:scale-110 duration-150 opacity-0 group-hover:opacity-100"
        onClick={deleteTask}
      >
        <img 
          src="/subject/DeleteIcon.svg"
          alt=""
        />
      </button>
    </div>
  );
}

export default Task;