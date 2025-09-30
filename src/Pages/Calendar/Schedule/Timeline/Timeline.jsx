import TimeRange from "./TimeRange";

function Timeline() {
  return (
    <>
      <div className="h-[calc(10%-1px)]"></div>
      <div className="h-[90%] grid grid-rows-8">
        <TimeRange start={1} end={2} time={'6:00'} />
        <TimeRange start={2} end={3} time={'8:00'} />
        <TimeRange start={3} end={4} time={'10:00'} />
        <TimeRange start={4} end={5} time={'12:00'} />
        <TimeRange start={5} end={6} time={'14:00'} />
        <TimeRange start={6} end={7} time={'16:00'} />
        <TimeRange start={7} end={8} time={'18:00'} />
        <TimeRange start={8} end={9} time={'20:00'} />
      </div>
    </>
  );
}

export default Timeline;