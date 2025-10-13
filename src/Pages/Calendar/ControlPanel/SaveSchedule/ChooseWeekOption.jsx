function ChooseWeekOption({ setChoosedWeek }) {
  const options = ['From', 'To'];

  return (
    <>
      <div>
        <label
          htmlFor="schedule-week"
          className="text-[14px] text-[#374151] dark:text-[#D1D5DB] font-light"
        >
          Weeks To Save
        </label>
      </div>
      <form
        id="schedule-week"
        className="h-8 mt-4 flex gap-2 items-center"
      >
        {options.map(option => (
          <div 
            key={option.toLowerCase()}
            className={
              `relative px-2 py-1 w-14 flex justify-center items-center bg-white dark:bg-[#1F2937]
              hover:bg-[#f9fafb] hover:dark:bg-[#374151] border border-[#D1D5DB] 
              dark:border-[#4B5563] rounded-lg duration-150 cursor-pointer outline-none
              has-checked:bg-[#e7e7e7] has-checked:dark:bg-[#374151]`
            }
          >
            <h1 className={`text-[15px] text-[#374151] dark:text-[#F9FAFB]`}>{option}</h1>
            <input
              className='absolute w-full h-full opacity-0 cursor-pointer'
              type="radio"
              id={`week-${option.toLowerCase()}`}
              name="schedule-week"
              value={option.toLowerCase()}
              defaultChecked={option === 'From'}
              onChange={() => {setChoosedWeek(option)}}
            />
          </div>
        ))}
      </form>
    </>
  );
}

export default ChooseWeekOption;