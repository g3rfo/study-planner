import PurpleButton from "../../../../Components/Common/PurpleButton";
import { usePopup } from "../../../../Hooks/usePopup";
import SaveSchedulePopup from "./SaveSchedulePopup";

function SaveScheduleButton({ setCalendar }) {
  const { open, PopupContainer } = usePopup();

  const openPopup = () => {
    open(<SaveSchedulePopup setCalendar={setCalendar} />);
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