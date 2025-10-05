import { getLessonColors } from "../../Utils/getLessonColors";

function ColorChooseBar() {
  const wrapStyle = 'flex justify-center items-center ransition-all duration-25 w-8 h-8 rounded-full box-border border-3 hover:border-4 has-checked:border-4 border-[#374151] dark:border-[#D1D5DB]';
  const radioStyle = 'w-full h-full opacity-0 cursor-pointer';
  const colors = getLessonColors();

  return (
    <form
      id="lesson-color"
      className="w-full h-full flex justify-between items-center"
    >
      <div className={`${wrapStyle}`} style={{ backgroundColor: colors.pink.bg }}>
        <input className={radioStyle} type="radio" id="option0" name="myOption" value="value0" />
      </div>
      <div className={`${wrapStyle}`} style={{ backgroundColor: colors.red.bg }}>
        <input className={radioStyle} type="radio" id="option1" name="myOption" value="value1" />
      </div>
      <div className={`${wrapStyle}`} style={{ backgroundColor: colors.orange.bg }}>
        <input className={radioStyle} type="radio" id="option2" name="myOption" value="value2" />
      </div>
      <div className={`${wrapStyle}`} style={{ backgroundColor: colors.yellow.bg }}>
        <input className={radioStyle} type="radio" id="option3" name="myOption" value="value3" />
      </div>
      <div className={`${wrapStyle}`} style={{ backgroundColor: colors.green.bg }}>
        <input className={radioStyle} type="radio" id="option4" name="myOption" value="value4" />
      </div>
      <div className={`${wrapStyle}`} style={{ backgroundColor: colors.blueGreen.bg }}>
        <input className={radioStyle} type="radio" id="option5" name="myOption" value="value5" />
      </div>
      <div className={`${wrapStyle}`} style={{ backgroundColor: colors.blue.bg }}>
        <input className={radioStyle} type="radio" id="option6" name="myOption" value="value6" />
      </div>
      <div className={`${wrapStyle}`} style={{ backgroundColor: colors.purple.bg }}>
        <input className={radioStyle} type="radio" id="option7" name="myOption" value="value7" />
      </div>
    </form>
  );
}

export default ColorChooseBar;