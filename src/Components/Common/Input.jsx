function Input({ id, placeholder }) {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="transition-all box-border mt-1 pl-3 h-11 w-full bg-white dark:bg-[#374151]
        shadow-sm rounded-lg text-[16px] text-[#374151] dark:text-[#CCCCCC] font-light
        placeholder:text-[16px] focus:border-none focus:outline-3 dark:focus:outline-[#A855F7]
        placeholder:text-[#CCCCCC] placeholder:font-light"
    />
  );
}

export default Input;