import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      id,
      type = 'text',
      placeholder = '',
      value = '',
      h = 'full',
      min,
      max,
      onBlur,
      onFocus
    },
    ref
  ) => {
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

    if (onBlur) onBlur(e);
  };

  const inputProps = {
    type,
    id,
    placeholder,
    defaultValue: value,
    onBlur: handleBlur,
    onFocus,
    ref,
    className: `
      transition-transform box-border px-3 w-full h-${h} bg-white 
      dark:bg-[#374151] shadow-sm rounded-lg text-[16px] text-[#374151] 
      dark:text-[#CCCCCC] font-light placeholder:text-[16px] focus:border-none 
      focus:outline-3 focus:outline-[#A855F7] placeholder:text-[#CCCCCC] placeholder:font-light
    `
  };

  // Only add min/max when they are provided and valid for the input type
  if ((type === 'date' || type === 'time') && min) inputProps.min = min;
  if ((type === 'date' || type === 'time') && max) inputProps.max = max;
  if (type === 'text' && max) inputProps.maxLength = max;

  return <input {...inputProps} />;
});

export default Input;