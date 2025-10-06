import { getLessonColors } from "../../Utils/getLessonColors";

function ColorChooseBar() {
  const wrapStyle = 'flex justify-center items-center transition-all duration-25 w-8 h-8 rounded-full box-border border-4 has-checked:w-10 has-checked:h-10';
  const radioStyle = 'w-full h-full opacity-0 cursor-pointer';
  const colors = getLessonColors();

  const colorEntries = Object.entries(colors);

  return (
    <form
      id="lesson-color"
      className="w-full h-full flex justify-between items-center"
    >
      {colorEntries.map(([key, color], index) => (
        <div
          key={key}
          className={wrapStyle}
          style={{ backgroundColor: color.bg, borderColor: color.b }}
        >
          <input
            className={radioStyle}
            type="radio"
            id={`option${index}`}
            name="myOption"
            value={key}
          />
        </div>
      ))}
    </form>
  );
}

export default ColorChooseBar;