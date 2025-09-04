import AddSubjectButton from "./AddSubjectButton";

function EmptyContent() {
  return (
    <div className="flex flex-col justify-center items-center h-80 bg-white dark:bg-[#374151] rounded-xl shadow-xl">
      <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#F3E8FF] dark:bg-[#9333EA]">
        <img src="/active/SubjectsIcon.svg" alt="" className="w-8 h-8"/>
      </div>
      <h1 className="mt-4 text-[16px] font-semibold text-[#111827] dark:text-[#E5E7EB]">No subjects yet</h1>
      <p className="mt-1 mb-6 max-w-[310px] text-center text-[14px] text-[#6B7280] dark:text-[#9CA3AF]">Get started by adding a new subject to organize your tasks.</p>
      <AddSubjectButton />
    </div>
  );
}

export default EmptyContent;