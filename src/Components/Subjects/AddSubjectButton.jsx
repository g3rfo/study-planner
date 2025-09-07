function AddSubjectButton() {
  return (
    <button
      className="w-35 h-10 bg-gradient-to-r from-[#A855F7] to-[#9333EA] hover:to-[#7E22CE] transition-colors duration-100 rounded-xl text-white cursor-pointer"
    >
      <div className="flex justify-center items-center gap-1 w-full h-full hover:scale-104 duration-150">
        <img src="/AddIcon.svg" alt="" className="w-4 h-4"/>
        Add Subject
      </div>
    </button>
  );
}

export default AddSubjectButton;