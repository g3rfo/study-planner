function BlueButton({ title, src = null, w = 'auto', h, func}) {
  return (
    <button
        className={
          `px-4 w-${w} h-${h} bg-gradient-to-r from-[#3A81F6] to-[#2563EB] hover:to-[#1D4FD9]
          transition-colors duration-100 rounded-lg text-[16px] text-white cursor-pointer`
        }
        onClick={() => func()}
      >
        <div className="flex justify-center items-center gap-1 w-full h-full hover:scale-104 duration-150">
          {src ? <img src={src} alt="" className="h-[50%] aspect-square" /> : null}
          {title}
        </div>
    </button>
  );
}

export default BlueButton;