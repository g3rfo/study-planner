import { useEffect, useState } from "react";
import Content from "./Content";
import EmptyContent from "./EmptyContent";
import SubjectsControlPanel from "./SubjectsControlPanel";

function Subjects() {
  const [empty, setEmpty] = useState(null);
  const [subjects, setSubjects] = useState(() => {
    if (localStorage.getItem('subjects') === null) {
      localStorage.setItem('subjects', JSON.stringify({}));
    }
    return JSON.parse(localStorage.getItem('subjects'));
  });

  useEffect(() => {
    if (subjects !== null){
      if (Object.keys(subjects).length === 0) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    }
  }, [subjects]);

  return ( 
    <div className="w-[80vw] max-w-[1560px] my-10">
      <SubjectsControlPanel setSubjects={setSubjects}/>
      <div className="mt-6">
        {!empty && 
          <Content 
          subjects={subjects}
          setSubjects={setSubjects}
          />
        }
        {empty && <EmptyContent setSubjects={setSubjects} />}
      </div>
    </div>
  );
}

export default Subjects;