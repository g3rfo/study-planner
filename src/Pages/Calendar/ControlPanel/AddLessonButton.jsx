import { usePopup } from "../../../Hooks/usePopup";
import AddLessonPopup from "./AddLessonPopup";
import BlueButton from "../../../Components/Common/BlueButton";

function AddLessonButton() {
  const { open, PopupContainer } = usePopup();

  const openPopup = () => {
    open(<AddLessonPopup />);
  }

  return (
    <>
      <BlueButton
        title='Add Lesson'
        src='./images/AddIcon.svg'
        h={10}
        func={openPopup}
      /> 
      <PopupContainer />
    </>
  );
}

export default AddLessonButton;