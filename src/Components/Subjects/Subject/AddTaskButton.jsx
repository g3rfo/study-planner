function AddTaskButton() {
  return (
    <button className="flex justify-center items-center gap-1 w-full h-10 hover:bg-[#F9FAFB] hover:dark:bg-[#374151] border border-[#D1D5DB] dark:border-[#4B5563] rounded-lg duration-150 cursor-pointer">
      <img src="/AddIcon.svg" alt="" className="w-4 h-4"/>
      <h1 className="text-[14px] text-[#374151] dark:text-[#F9FAFB]">Add Task</h1>
    </button>
  );
}

export default AddTaskButton;