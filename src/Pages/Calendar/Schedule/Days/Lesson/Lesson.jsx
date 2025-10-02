import { getLessonColors } from "../../../../../Utils/getLessonColors";

function Lesson({ top = 0, height = 0, color = 'red', title = ''}) {
  const colors = getLessonColors();

  return (
    <div 
      className={`absolute px-2 w-full rounded-lg bg-transparent border-[1px] box-border flex justify-between items-top text-[16px]
        font-medium text-[#1F2937] dark:text-white`}
      style={{
        top: `${top}px`,
        height: `${height}px`,
        backgroundColor: `${colors[color].bg}`,
        borderColor: `${colors[color].b}`
      }}
    >
      <div>
        <h1>{title}</h1>
      </div>
      <h1 className="font-light">hh:mm</h1>
    </div>
  );
}

export default Lesson;