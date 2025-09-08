import Content from "./Content";
import EmptyContent from "./EmptyContent";
import SubjectsControlPanel from "./SubjectsControlPanel";

function Subjects() {
  return ( 
    <div className="w-[80vw] max-w-[1560px] my-10">
      <SubjectsControlPanel />
      <div className="mt-6">
        {/* <EmptyContent /> */}
        <Content />
      </div>
    </div>
  );
}

export default Subjects;