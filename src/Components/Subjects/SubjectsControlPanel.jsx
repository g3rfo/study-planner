import ControlPanelTitle from "../Common/ControlPanelTitle";
import AddSubjectButton from "./AddSubjectButton";

function SubjectsControlPanel() {
  return ( 
    <div className="h-10 w-full flex justify-between items-center">
      <ControlPanelTitle iconSource='/active/SubjectsIcon.svg' title='My Subjects' />
      <AddSubjectButton />
    </div>
  );
}

export default SubjectsControlPanel;