function Button({ title, src = null, darkSrc = null, w, h, fs = 14, func = () => {}, addition = ''}) {
  return (
    <button 
      className={
        `px-4 flex justify-center items-center gap-1 w-${w} h-${h} ${addition}
        hover:bg-[#F9FAFB] hover:dark:bg-[#374151] border border-[#D1D5DB] 
        dark:border-[#4B5563] rounded-lg duration-150 cursor-pointer outline-none`
      }
      onClick={func}  
    >
      {src ? <img src={src} alt="" className="h-[40%] aspect-square block dark:hidden" /> : null}
      {darkSrc ? <img src={darkSrc} alt="" className="h-[40%] aspect-square hidden dark:block" /> : null}
      <h1 className={`text-[${fs}px] text-[#374151] dark:text-[#F9FAFB]`}>
        {title}
      </h1>
    </button>
  );
}

export default Button;