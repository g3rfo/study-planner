import { closePopup } from "../../../Hooks/usePopup";
import Button from "../../Common/Button";
import Input from "../../Common/Input";
import PurpleButton from "../../Common/PurpleButton";
import { saveSubjectName } from "../../../Utils/saveSubjectName";

function AddSubjectPopup({ setSubjects }) {
  const saveNewSubject = () => {
    saveSubjectName('add-subject', 'save', setSubjects);
  }

  return (
    <>
      <div className="flex justify-between items-center h-7">
        <h1 className="text-[18px] font-medium text-[#374151] dark:text-white">
          Add New Subject
        </h1>
        <button
          className="flex justify-center items-center w-7 h-7 cursor-pointer rounded-full
          hover:bg-[#F9FAFB] hover:dark:bg-[#374151] duration-150"
          onClick={closePopup}
        >
          <img src="/CloseIcon.svg" alt="" className="w-6 h-6" />
        </button>
      </div>
      <div className="mt-8 h-18">
        <div className="mb-1">
          <label
            htmlFor="add-subject"
            className="text-[14px] text-[#374151] dark:text-[#D1D5DB] font-light"
          >
            Subject Name
          </label>
        </div>
        <div className="h-11">
          <Input
            id={'add-subject'}
            placeholder={'Add new subject name'}
          />
        </div>
      </div>
      <div className="mt-8 flex justify-end gap-2">
        <Button
          title={'Cancel'}
          h={10}
          fs={16}
          func={closePopup}
        />
        <PurpleButton
          title={'Save'}
          h={10}
          func={saveNewSubject}
        />
      </div>
    </>
  );
}

export default AddSubjectPopup;