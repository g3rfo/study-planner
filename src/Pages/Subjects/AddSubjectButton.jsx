import { usePopup } from "../../Hooks/usePopup";
import AddSubjectPopup from "../Subjects/AddSubjectPopup";
import PurpleButton from "../../Components/Common/PurpleButton";

function AddSubjectButton({ setSubjects }) {
  const { open, PopupContainer } = usePopup();

  const openPopup = () => {
    open(<AddSubjectPopup setSubjects={setSubjects} />);
  }

  return (
    <>
      <PurpleButton
        title='Add Subject'
        src='/public/AddIcon.svg'
        h={10}
        func={openPopup}
      />   
      <PopupContainer />
    </>
  );
}

export default AddSubjectButton;