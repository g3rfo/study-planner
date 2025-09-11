import { useEffect, useState } from "react";
import Subject from "./Subject/Subject";

function Content({ subjects, setSubjects }) {
  const [columnsNum, setColumnsNum] = useState(1);
  
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setColumnsNum(w >= 1536 ? 3 : w >= 1280 ? 2 : 1);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columns = columnsNum === 3 ? 
    [[], [], []] : columnsNum === 2 ?
      [[], []] : [[]];

  let num = 0;
  for (let key in subjects) {
    const columnIndex = num % columnsNum;
    columns[columnIndex].push(
      <Subject
        key={key} 
        title={key} 
        subjects={subjects} 
        setSubjects={setSubjects} 
      />
    );
    num++;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-3">
      <div className="subjects-col-0 flex flex-col items-center gap-3">
        {columns[0]}
      </div>
      <div className="subjects-col-1 flex flex-col items-center gap-3">
        {columnsNum > 1 && columns[1]}
      </div>
      <div className="subjects-col-2 flex flex-col items-center gap-3">
        {columnsNum > 2 && columns[2]}
      </div>
    </div>
  );
}

export default Content;