import TaskButton from "./TaskButton";
import Progress from "./Progress";
import Task from "./Task";
import Button from "../../Common/Button";

function Subject( {title} ) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#F3F4F6] dark:border-[#374151] shadow-sm">
      <div className="box-border p-4 flex justify-between items-center h-15 bg-[#F9F4FF] dark:bg-[#2B2648] border-b border-[#F3E8FF] dark:border-[#581C87]">
        <h1 className="text-[16px] font-semibold text-[#7E22CE] dark:text-[#D8B4FE]">{title}</h1>
        <div className="flex gap-2">
          <TaskButton src={'/subject/EditNameIcon.svg'} />
          <TaskButton src={'/subject/DeleteIcon.svg'}/>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-5">
        <Progress />
        <div>
          <Task />
        </div>
        <Button title='Add Task' src={'/AddIcon.svg'} w={'full'} h={10} />
      </div>
    </div>
  );
}

export default Subject;