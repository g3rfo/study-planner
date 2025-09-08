function TaskButton({src}) {
  return (
    <button className="w-7 h-7 flex justify-center items-center cursor-pointer hover:bg-[#F9FAFB] dark:hover:bg-[#374151] rounded-md duration-150">
      <img src={src} alt="" className="w-5 h-5"/>
    </button>
  );
}

export default TaskButton;