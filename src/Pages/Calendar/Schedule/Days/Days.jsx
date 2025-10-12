import Day from "./Day";

function Days({ setCalendar, currentWeek }) {
  const dayKeys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const days = dayKeys.map(key => Array.from(currentWeek[key]?.lessons ?? []));

  return (
    <div 
      className="flex h-full bg-[#d8e6f6] dark:bg-[#293b5f]
        border-t border-[#dde1e9] dark:border-[#6d6f72] overflow-hidden"
    >
      {days?.map((day, idx) => (
        <Day
          key={dayKeys[idx]}
          lessons={day}
          setCalendar={setCalendar}
        />
      ))}
    </div>
  );
}

export default Days;