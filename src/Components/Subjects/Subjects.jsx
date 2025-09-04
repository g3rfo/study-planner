import EmptyContent from "./EmptyContent";
import SubjectsControlPanel from "./SubjectsControlPanel";

function Subjects() {
  return ( 
    <div className="w-[min(80vw,1560px)] h-full mt-10">
      <SubjectsControlPanel />
      <div className="mt-6">
        <EmptyContent />
      </div>
    </div>
  );
}

export default Subjects;