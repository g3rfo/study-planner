import Content from "./Content";
import EmptyContent from "./EmptyContent";
import SubjectsControlPanel from "./SubjectsControlPanel";

function Subjects() {
  return ( 
    <div className="w-[min(80vw,1560px)] mt-10">
      <SubjectsControlPanel />
      <div className="mt-6">
        {/* <EmptyContent /> */}
        <Content />
      </div>
    </div>
  );
}

export default Subjects;