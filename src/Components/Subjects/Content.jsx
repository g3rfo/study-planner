import Subject from "./Subject/Subject";

function Content() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="first-column flex flex-col gap-3">
        <Subject title={'ООП'}/>
        <div className="rounded-xl border-2 bg-amber-300 h-90">1</div>
        <div className="rounded-xl border-2 bg-amber-300 h-60">2</div>
      </div>
      <div className="second-column flex flex-col gap-3">
        <div className="rounded-xl border-2 bg-amber-300 h-60">3</div>
        <div className="rounded-xl border-2 bg-amber-300 h-70">4</div>
      </div>
      <div className="third-column flex flex-col gap-3">
        <div className="rounded-xl border-2 bg-amber-300 h-50">5</div>
        <div className="rounded-xl border-2 bg-amber-300 h-80">6</div>
      </div>
    </div>
  );
}

export default Content;