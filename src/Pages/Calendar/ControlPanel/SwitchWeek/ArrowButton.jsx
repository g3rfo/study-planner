function ArrowButton({isDisabled = false, direction, onClick }) {
  return (
    <button
      disabled={isDisabled}
      className="w-9 h-9 flex justify-center items-center cursor-pointer hover:bg-white
      dark:hover:bg-[#374151] rounded-lg duration-150 outline-none"
      onClick={() => {onClick()}}
    >
        <img
          src={`./images/arrows/${direction}ArrowIcon.svg`}
          alt=""
          className="h-5 aspect-square hidden dark:block"
        />
        <img
          src={`./images/arrows/dark/${direction}ArrowIcon.svg`}
          alt=""
          className="h-5 aspect-square block dark:hidden"
        />
    </button>
  );
}

export default ArrowButton