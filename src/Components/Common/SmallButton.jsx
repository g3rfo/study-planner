function SmallButton({ src, func = () => {}, w = 7, hover = 'changeColor'}) {
  return (
    <button
      className={`w-${w} aspect-square flex justify-center items-center cursor-pointer
        ${hover === 'changeColor' ? 'hover:bg-[#F9FAFB] dark:hover:bg-[#374151]' : null} 
        rounded-md duration-150 outline-none`}
      onClick={() => func()}
    >
      <img
        src={src}
        alt=""
        className={`w-[70%] aspect-square object-center ${hover === 'scale' ? 'hover:scale-110' : null}`}
      />
    </button>
  );
}

export default SmallButton;