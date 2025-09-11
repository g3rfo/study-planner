import { usePopup } from "../../Hooks/usePopup";
import AddSubjectPopup from "./Popups/AddSubjectPopup";
import PurpleButton from "../Common/PurpleButton";

function AddSubjectButton({ setSubjects }) {
  const { open, PopupContainer } = usePopup();

  const openPopup = () => {
    open(<AddSubjectPopup setSubjects={setSubjects} />);
  }

  return (
    <>
      <PurpleButton
        title='Add Subject'
        src='/AddIcon.svg'
        h={10}
        func={openPopup}
      />   
      <PopupContainer />
    </>
  );
}

export default AddSubjectButton;