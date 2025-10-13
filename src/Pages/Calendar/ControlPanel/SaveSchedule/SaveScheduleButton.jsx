import PurpleButton from "../../../../Components/Common/PurpleButton";
import { usePopup } from "../../../../Hooks/usePopup";
import SaveSchedulePopup from "./SaveSchedulePopup";

function SaveScheduleButton() {
  const { open, PopupContainer } = usePopup();

  const openPopup = () => {
    open(<SaveSchedulePopup />);
  }

  return (
    <>
      <PurpleButton
        title='Save Schedule'
        src='./images/SaveIcon.svg'
        h={10}
        func={openPopup}
      />
      <PopupContainer />
    </>
  );
}

export default SaveScheduleButton;