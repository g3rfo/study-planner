import Day from "./Day";

function Days({ currentWeek }) {
  const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const days = dayKeys.map(key => Array.from(currentWeek[key]?.lessons ?? []));
  
  return (
    <div 
      className="flex h-full bg-[#c4dffc] dark:bg-[#293b5f]
        border-t border-[#dde1e9] dark:border-[#6d6f72]"
      >
      <Day key={'mon'} lessons={days[0]} />
      <Day key={'tue'} lessons={days[1]} />
      <Day key={'wed'} lessons={days[2]} />
      <Day key={'thu'} lessons={days[3]} />
      <Day key={'fri'} lessons={days[4]} />
      <Day key={'sat'} lessons={days[5]} />
      <Day key={'sun'} lessons={days[6]} />
    </div>
  );
}

export default Days;