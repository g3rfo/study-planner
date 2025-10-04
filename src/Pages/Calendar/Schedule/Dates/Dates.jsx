import Day from "./Day";

function Dates({ startDate }) {
  const dates = [];
  for(let i = 0; i < 7; i++) {
    const nextDate = new Date(startDate);
    nextDate.setDate(startDate.getDate() + i);
    dates.push(nextDate.getDate());
  }

  return (
    <div className="flex h-[8%]">
      <Day day={'Monday'} date={dates[0]} />
      <Day day={'Tuesday'} date={dates[1]} />
      <Day day={'Wednesday'} date={dates[2]} />
      <Day day={'Thursday'} date={dates[3]} />
      <Day day={'Friday'} date={dates[4]} />
      <Day day={'Saturday'} date={dates[5]} />
      <Day day={'Sunday'} date={dates[6]} />
    </div>
  );
}

export default Dates;