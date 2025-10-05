// function Input({ id, type = 'text', placeholder = '', value = '', h = 'full' }) {
//   return (
//     <input
//       type={type}
//       min={'2025-09-29'}
//       max={'2025-10-5'}
//       id={id}
//       placeholder={placeholder}
//       defaultValue={value}
//       className={
//         `transition-all focus:transition-none box-border pl-3 w-full h-${h} bg-white 
//         dark:bg-[#374151] shadow-sm rounded-lg text-[16px] text-[#374151] 
//         dark:text-[#CCCCCC] font-light placeholder:text-[16px] focus:border-none 
//         focus:outline-3 focus:outline-[#A855F7] placeholder:text-[#CCCCCC] placeholder:font-light`
//       }
//     />
//   );
// }

// export default Input;

function Input({
  id,
  type = 'text',
  placeholder = '',
  value = '',
  h = 'full',
  min,
  max
}) {
  const handleBlur = (e) => {
    if (type === 'time' && (min || max)) {
      const val = e.target.value;
      if (!val) return;

      // Compare only after full value entered
      if (min && val < min) {
        e.target.value = min;
      } else if (max && val > max) {
        e.target.value = max;
      }
    }
  };

  const inputProps = {
    type,
    id,
    placeholder,
    defaultValue: value,
    onBlur: handleBlur,
    className: `
      transition-all focus:transition-none box-border px-3 w-full h-${h} bg-white 
      dark:bg-[#374151] shadow-sm rounded-lg text-[16px] text-[#374151] 
      dark:text-[#CCCCCC] font-light placeholder:text-[16px] focus:border-none 
      focus:outline-3 focus:outline-[#A855F7] placeholder:text-[#CCCCCC] placeholder:font-light
    `
  };

  // Only add min/max when they are provided and valid for the input type
  if ((type === 'date' || type === 'time') && min) inputProps.min = min;
  if ((type === 'date' || type === 'time') && max) inputProps.max = max;

  return <input {...inputProps} />;
}

export default Input;