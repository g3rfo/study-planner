import Day from "./Day";

function DateAside() {
  return (
    <div className="w-[10%] h-full flex flex-col justify-between border-r border-[#dde1e9] dark:border-[#6d6f72] box-border">
      <Day day={'Monday'} date={'29'}/>
      <Day day={'Tuesday'} date={'30'}/>
      <Day day={'Wednesday'} date={'1'}/>
      <Day day={'Thursday'} date={'2'}/>
      <Day day={'Friday'} date={'3'}/>
      <Day day={'Saturday'} date={'4'}/>
      <Day day={'Sunday'} date={'5'}/>
    </div>
  );
}

export default DateAside;