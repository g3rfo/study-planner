import { useEffect, useState } from "react";
import Content from "./Content";
import EmptyContent from "./EmptyContent";
import SubjectsControlPanel from "./SubjectsControlPanel";

function Subjects() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [subjects, setSubjects] = useState(() => {
    if (localStorage.getItem('subjects') === null) {
      localStorage.setItem('subjects', JSON.stringify({}));
    }
    return JSON.parse(localStorage.getItem('subjects'));
  });

  useEffect(() => {
    if (Object.keys(subjects).length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [subjects])

  return ( 
    <div className="w-[80vw] max-w-[1560px] my-10">
      <SubjectsControlPanel setSubjects={setSubjects}/>
      <div className="mt-6">
        {isEmpty && <EmptyContent setSubjects={setSubjects} />}
        {!isEmpty && <Content subjects={subjects} setSubjects={setSubjects} />}
      </div>
    </div>
  );
}

export default Subjects;