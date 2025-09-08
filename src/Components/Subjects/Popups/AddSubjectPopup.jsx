import { closePopup } from "../../../Hooks/usePopup";
import Button from "../../Common/Button";
import PurpleButton from "../../Common/PurpleButton";

function AddSubjectPopup() {
  return (
    <>
      <div className="flex justify-between items-center h-7">
        <h1 className="text-[18px] font-medium text-[#374151] dark:text-white">Add New Subject</h1>
        <button
          className="flex justify-center items-center w-7 h-7 cursor-pointer rounded-full hover:bg-[#F9FAFB] hover:dark:bg-[#374151] duration-150"
          onClick={closePopup}
        >
          <img src="/CloseIcon.svg" alt="" className="w-6 h-6" />
        </button>
      </div>
      <div className="mt-8">
        <label htmlFor="add-subject" className="text-[14px] text-[#374151] dark:text-[#D1D5DB] font-light">Subject Name</label>
        <input type="text" id="add-subject" className="mt-1 pl-3 h-11 w-full bg-white dark:bg-[#374151] shadow-sm rounded-lg text-[16px] text-[#374151] dark:text-[#CCCCCC] font-light placeholder:text-[16px] border-none focus:outline-3 dark:focus:outline-[#A855F7] placeholder:text-[#CCCCCC] placeholder:font-light" placeholder="Enter the subject name"/>
      </div>
      <div className="mt-8 flex justify-end gap-2">
        <Button title={'Cancel'} h={10} fs={16} func={closePopup}/>
        <PurpleButton title={'Save'} h={10} />
      </div>
    </>
  );
}

export default AddSubjectPopup;