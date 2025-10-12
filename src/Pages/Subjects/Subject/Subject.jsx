import { useEffect, useState } from "react";
import SmallButton from "../../../Components/Common/SmallButton";
import Progress from "./Progress";
import Task from "./Task";
import Button from "../../../Components/Common/Button";
import Input from "../../../Components/Common/Input";
import InputHandleButtons from "./InputHandleButtons";
import { saveSubjectName } from "../../../Utils/saveSubjectName";

function Subject({ title, subjects, setSubjects }) {
  const [tasks, setTasks] = useState(subjects[title]);
  const [doneTasksNum, setDoneTasksNum] = useState(0);
  const [isTitleChanging, setIsTitleChanging] = useState(false);
  const [isTaskAdding, setIsTaskAdding] = useState(false);

  useEffect(() => {
    let result = 0;
    for (let task of tasks) {
      if (task.done) result++;
    }
    setDoneTasksNum(result);
  }, [tasks])

  const deleteSubject = () => {
    const newSubjects = { ...subjects };
    delete newSubjects[title];
    localStorage.setItem('subjects', JSON.stringify(newSubjects));
    setSubjects(newSubjects);
  }

  const showTasks = () => {
    const tasksTemplate = [];

    for (let task of tasks) {
      tasksTemplate.push(
        <Task
          key={task.title}
          subjectKey={title}
          title={task.title}
          status={task.done}
          setTasks={setTasks}
        />
      );
    }

    return (tasksTemplate);
  }

  const addNewTask = (inputId) => {
    const task = document.getElementById(inputId).value;
    let subjects = JSON.parse(localStorage.getItem('subjects'));
    
    subjects[title].push({title: task, done: false});

    localStorage.setItem('subjects', JSON.stringify(subjects));
    setTasks(JSON.parse(localStorage.getItem('subjects'))[title]);
    setSubjects(JSON.parse(localStorage.getItem('subjects')));
  }

  return (
    <div 
      className="w-full rounded-xl overflow-hidden bg-white dark:bg-[#1F2937] border 
      border-[#d5b5f7] dark:border-[#374151] shadow-xl fade-in-up"
    >
      <div
        className="box-border p-4 flex justify-between items-center h-15 bg-[#F9F4FF]
        dark:bg-[#2B2648] border-b border-[#d5b5f7] dark:border-[#581C87]"
      >
        {!isTitleChanging ? 
          <h1 className="text-[17px] font-semibold text-[#7E22CE] dark:text-[#D8B4FE]">
            {title}
          </h1>
          :
          <div className="flex justify-between items-center w-[75%]">
            <Input
              id='change-title'
              placeholder={'Enter new name'}
              value={title}
              h={9}
            />
            <InputHandleButtons
              submitFunc={() => {
                const isSaved = saveSubjectName('change-title', 'rename', setSubjects, title);
                isSaved ? setIsTitleChanging(!isTitleChanging) : null;
              }}
              closeFunc={() => {setIsTitleChanging(!isTitleChanging)}}
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
              id='add-task'
              placeholder={'Enter new task'}
              h={10}
            />
            <InputHandleButtons
              submitFunc={() => {
                addNewTask('add-task');
                setIsTaskAdding(!isTaskAdding);
              }}
              closeFunc={() => {setIsTaskAdding(!isTaskAdding)}}
              h={8}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default Subject;