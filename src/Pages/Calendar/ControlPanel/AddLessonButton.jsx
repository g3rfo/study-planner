import { usePopup } from "../../../Hooks/usePopup";
import AddLessonPopup from "./AddLessonPopup";
import BlueButton from "../../../Components/Common/BlueButton";

function AddLessonButton({ startDate = null, endDate = null }) {
  const { open, PopupContainer } = usePopup();

  const openPopup = () => {
    open(<AddLessonPopup startDate={startDate} endDate={endDate}/>);
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