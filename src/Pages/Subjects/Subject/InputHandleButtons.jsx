function InputHandleButtons({ submitFunc = () => {}, closeFunc = () => {}, h = '8' }) {
  const buttonStyle = 
    'flex justify-center items-center cur cursor-pointer hover:scale-110 duration-150 h-full aspect-square';

  return (
    <div className={`flex rounded-r-lg h-${h}`}>
      <button 
        className={`${buttonStyle} bg-[#A855F7]`}
        onClick={() => submitFunc()}
      >
        <img
          src={'./images/SubmitIcon.svg'}
          alt=""
          className="w-5 h-5"
        />
      </button>
      <button
        className={`${buttonStyle} bg-white dark:bg-[#374151] rounded-r-lg`}
        onClick={() => closeFunc()}
      >
        <img
          src={'./images/CloseIcon.svg'}
          alt=""
          className="w-5 h-5"
        />
      </button>
    </div>
  );
}

export default InputHandleButtons;