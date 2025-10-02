import Day from "./Day";

function Days() {
  return (
    <div 
      className="flex h-full bg-[#c4dffc] dark:bg-[#293b5f]
        border-t border-[#dde1e9] dark:border-[#6d6f72]"
      >
      <Day key={'mon'} />
      <Day key={'tue'}/>
      <Day key={'wed'}/>
      <Day key={'thu'}/>
      <Day key={'fri'}/>
      <Day key={'sat'}/>
      <Day key={'sun'}/>
    </div>
  );
}

export default Days;