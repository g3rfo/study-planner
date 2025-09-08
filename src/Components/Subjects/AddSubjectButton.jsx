import { usePopup } from "../../Hooks/usePopup";
import AddSubjectPopup from "./Popups/AddSubjectPopup";
import PurpleButton from "../Common/PurpleButton";

function AddSubjectButton() {
  const { open, PopupContainer } = usePopup();

  const openPopup = () => {
    open(<AddSubjectPopup />);
  }

  return (
    <>
      <PurpleButton title='Add Subject' src='/public/AddIcon.svg' h={10} func={openPopup}/>   
      <PopupContainer />
    </>
  );
}

export default AddSubjectButton;