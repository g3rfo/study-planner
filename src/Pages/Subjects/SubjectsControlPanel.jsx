import ControlPanelTitle from "../../Components/Common/ControlPanelTitle";
import AddSubjectButton from "./AddSubjectButton";

function SubjectsControlPanel({ setSubjects }) {
  return ( 
    <div className="h-10 w-full flex justify-between items-center">
      <ControlPanelTitle
        iconSource='/public/active/SubjectsIcon.svg' 
        title='My Subjects' 
      />
      <AddSubjectButton setSubjects={setSubjects} />
    </div>
  );
}

export default SubjectsControlPanel;