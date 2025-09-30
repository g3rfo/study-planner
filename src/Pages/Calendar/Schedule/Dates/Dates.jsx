import Day from "./Day";

function Dates() {
  return (
    <div className="flex h-[10%]">
      <Day day={'Monday'} date={'29'} />
      <Day day={'Tuesday'} date={'30'} />
      <Day day={'Wednesday'} date={'1'} />
      <Day day={'Thursday'} date={'2'} />
      <Day day={'Friday'} date={'3'} />
      <Day day={'Saturday'} date={'4'} />
      <Day day={'Sunday'} date={'5'} />
    </div>
  );
}

export default Dates;