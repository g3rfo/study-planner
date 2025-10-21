import { useCallback, useEffect, useRef, useState } from "react";
import SmallButton from "../../../Components/Common/SmallButton";
import Progress from "./Progress";
import Task from "./Task";
import Button from "../../../Components/Common/Button";
import Input from "../../../Components/Common/Input";
import InputHandleButtons from "./InputHandleButtons";
import { saveSubject } from "../../../Utils/Subject/saveSubject";

function Subject({ title, subjects, setSubjects }) {
  const subject = subjects[title];
  const color = JSON.parse(subject.color);

  const [tasks, setTasks] = useState(subject.tasks);
  const [doneTasksNum, setDoneTasksNum] = useState(0);
  const [isTitleChanging, setIsTitleChanging] = useState(false);
  const [isTaskAdding, setIsTaskAdding] = useState(false);

  const titleInputRef = useRef(null);
  const addTaskInputRef = useRef(null);
  const titleHandleButtonsRef = useRef(null);
  const addTaskHandleButtonsRef = useRef(null);


  const deleteSubject = () => {
    const newSubjects = { ...subjects };
    delete newSubjects[title];
    localStorage.setItem('subjects', JSON.stringify(newSubjects));
    setSubjects(newSubjects);
  };
  
  const showTasks = () => {
    return tasks.map(task => {
      return (
        <Task
          key={task.title}
          subjectKey={title}
          title={task.title}
          status={task.done}
          setTasks={setTasks}
        />
      );
    });
  };
    
  const addNewTask = useCallback((inputId) => {
    const newTask = document.getElementById(inputId).value;
    let subjects = JSON.parse(localStorage.getItem('subjects'));
    
    subjects[title].tasks.push({title: newTask, done: false});
    
    localStorage.setItem('subjects', JSON.stringify(subjects));
    setTasks(JSON.parse(localStorage.getItem('subjects'))[title].tasks);
    setSubjects(JSON.parse(localStorage.getItem('subjects')));
  }, [title, setSubjects]);

  const submitTitleChange = useCallback(() => {
    const isSaved = saveSubject('change-title', 'rename', setSubjects, title);
    isSaved ? setIsTitleChanging(!isTitleChanging) : null;
  }, [isTitleChanging, title, setSubjects]);

  const closeTitleChanging = useCallback(() => {
    setIsTitleChanging(!isTitleChanging);
  }, [isTitleChanging]);

  const submitTaskAdding = useCallback(() => {
    addNewTask('add-task');
    setIsTaskAdding(!isTaskAdding);
  }, [addNewTask, isTaskAdding]);

  const closeTaskAdding = useCallback(() => {
    setIsTaskAdding(!isTaskAdding)
  }, [isTaskAdding]);


  useEffect(() => {
    const doneCount = tasks.filter(task => task.done).length;
    setDoneTasksNum(doneCount);
  }, [tasks])

  useEffect(() => {
    if (isTitleChanging && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isTitleChanging]);

  useEffect(() => {
    if (isTaskAdding && addTaskInputRef.current) {
      addTaskInputRef.current.focus();
    }
  }, [isTaskAdding]);

  useEffect(() => {
    if (!isTitleChanging || !titleInputRef.current) return;

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submitTitleChange();
      }
      if (e.key === "Escape") {
        e.preventDefault();
        closeTitleChanging();
      }
    };

    const input = titleInputRef.current;
    input.addEventListener("keydown", handleKeyDown);
    return () => input.removeEventListener("keydown", handleKeyDown);
  }, [isTitleChanging, closeTitleChanging, submitTitleChange]);

  useEffect(() => {
    if (!isTaskAdding || !addTaskInputRef.current) return;

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submitTaskAdding();
      }
      if (e.key === "Escape") {
        e.preventDefault();
        closeTaskAdding();
      }
    };

    const input = addTaskInputRef.current;
    input.addEventListener("keydown", handleKeyDown);
    return () => input.removeEventListener("keydown", handleKeyDown);
  }, [isTaskAdding, closeTaskAdding, submitTaskAdding]);

  useEffect(() => {
    if (!isTitleChanging) return;

    const handleClickOutside = (event) => {
      if (
        titleInputRef.current &&
        !titleInputRef.current.contains(event.target) &&
        (titleHandleButtonsRef.current || !titleHandleButtonsRef.current.contains(event.target))
      ) {
        closeTitleChanging();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTitleChanging, closeTitleChanging]);

  useEffect(() => {
    if (!isTaskAdding) return;

    const handleClickOutside = (event) => {
      if (
        addTaskInputRef.current &&
        !addTaskInputRef.current.contains(event.target) &&
        (!addTaskHandleButtonsRef.current || !addTaskHandleButtonsRef.current.contains(event.target))
      ) {
        closeTaskAdding();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTaskAdding, closeTaskAdding]);

  return (
    <div 
      className="w-full rounded-xl overflow-hidden border shadow-xl fade-in-up bg-white dark:bg-[#1F2937]"
      style={{ borderColor: color.b }}
    >
      <div
        className="box-border p-4 flex justify-between items-center h-15 border-b"
        style={{ backgroundColor: color.bg, borderColor: color.b }}
      >
        {!isTitleChanging ? 
          <h1 className="text-[17px] font-semibold text-white">
            {title}
          </h1>
          :
          <div
            className="flex justify-between items-center w-[75%]"
          >
            <Input
              ref={titleInputRef}
              id='change-title'
              placeholder={'Enter new name'}
              value={title}
              h={9}
            />
            <InputHandleButtons
              ref={titleHandleButtonsRef}
              submitFunc={submitTitleChange}
              closeFunc={closeTitleChanging}
            />
          </div>
        }
        <div className="flex gap-2">
          <SmallButton
            src={'./images/subject/EditNameIcon.svg'}
            func={() => {setIsTitleChanging(!isTitleChanging)}}
          />
          <SmallButton
            src={'./images/subject/DeleteIcon.svg'}
            func={deleteSubject}
          />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-5">
        {tasks.length > 0 &&
          <>
            <Progress
              doneTasksNum={doneTasksNum}
              tasksNum={tasks.length}
            />
            <div>
              {showTasks()}
            </div>
          </>
        }
        {!isTaskAdding ?
          <Button 
            title='Add Task'
            src={'./images/LightAddIcon.svg'}
            darkSrc={'./images/AddIcon.svg'}
            w={'full'}
            h={10}
            func={() => {setIsTaskAdding(!isTaskAdding)}}
          /> 
          :
          <div className="flex justify-between items-center w-full">
            <Input
              ref={addTaskInputRef}
              id='add-task'
              placeholder={'Enter new task'}
              h={10}
            />
            <InputHandleButtons
              ref={addTaskHandleButtonsRef}
              submitFunc={submitTaskAdding}
              closeFunc={closeTaskAdding}
              h={8}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default Subject;