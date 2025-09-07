import AddTaskButton from "./AddTaskButton";
import Button from "./Button";
import Progress from "./Progress";
import Task from "./Task";

function Subject( {title} ) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#F3F4F6] dark:border-[#374151] shadow-sm">
      <div className="box-border p-4 flex justify-between items-center h-15 bg-[#F9F4FF] dark:bg-[#2B2648] border-b border-[#F3E8FF] dark:border-[#581C87]">
        <h1 className="text-[16px] font-semibold text-[#7E22CE] dark:text-[#D8B4FE]">{title}</h1>
        <div className="flex gap-2">
          <Button src={'/subject/EditNameIcon.svg'} />
          <Button src={'/subject/DeleteIcon.svg'}/>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-5">
        <Progress />
        <div>
          <Task />
        </div>
        <AddTaskButton />
      </div>
    </div>
  );
}

export default Subject;