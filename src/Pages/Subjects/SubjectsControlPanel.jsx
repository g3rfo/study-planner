import ControlPanelTitle from "../../Components/Common/ControlPanelTitle";
import AddSubjectButton from "./AddSubjectButton";

function SubjectsControlPanel({ setSubjects }) {
  return ( 
    <div className="h-10 w-full flex justify-between items-center">
      <ControlPanelTitle
        iconSource='./images/active/SubjectsIcon.svg' 
        title='My Subjects'
        bg='bg-[#F3E8FF] dark:bg-[#9333EA]'
      />
      <AddSubjectButton setSubjects={setSubjects} />
    </div>
  );
}

export default SubjectsControlPanel;