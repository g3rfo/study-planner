function PurpleButton({ title, src = null, w = 'auto', h, func = () => {}}) {
  return (
    <button
        className={
          `px-4 w-${w} h-${h} bg-gradient-to-r from-[#A855F7] to-[#9333EA] hover:to-[#7E22CE]
          transition-colors duration-100 rounded-lg text-[16px] text-white cursor-pointer outline-none`
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

export default PurpleButton;