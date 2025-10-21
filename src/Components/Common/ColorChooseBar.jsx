import { getColors } from "../../Utils/getColors";

function ColorChooseBar() {
  const wrapStyle = 'flex justify-center items-center transition-all duration-25 w-8 h-8 rounded-full box-border border-4 has-checked:w-10 has-checked:h-10';
  const radioStyle = 'w-full h-full opacity-0 cursor-pointer';
  const colors = getColors();

  const colorEntries = Object.entries(colors);

  return (
    <form
      id={`color-form`}
      className="w-full h-full flex justify-between items-center transition-all"
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
            name="color-option"
            value={JSON.stringify(color)}
          />
        </div>
      ))}
    </form>
  );
}

export default ColorChooseBar;