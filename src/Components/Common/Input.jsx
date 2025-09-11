function Input({ id, placeholder, value = '', h = 'full'}) {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      defaultValue={value}
      className={`transition-all focus:transition-none box-border pl-3 w-full h-${h} bg-white dark:bg-[#374151]
        shadow-sm rounded-lg text-[16px] text-[#374151] dark:text-[#CCCCCC] font-light
        placeholder:text-[16px] focus:border-none focus:outline-3 focus:outline-[#A855F7]
        placeholder:text-[#CCCCCC] placeholder:font-light`}
    />
  );
}

export default Input;