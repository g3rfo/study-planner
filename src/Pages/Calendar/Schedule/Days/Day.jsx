import Lesson from "./Lesson/Lesson";

function Day() {
  return ( 
    <div
      className="relative w-1/7 h-full
        border-r border-[#dde1e9] dark:border-[#6d6f72] box-border"
    >
      <Lesson top={0} height={20} color='red' title='Test1'/>
      <Lesson top={60} height={20} color="orange" title='Test2' />
      <Lesson top={120} height={50} color="yellow" title='Test3' />
      <Lesson top={180} height={60} color="green" title='Test4' />
      <Lesson top={240} height={35} color="blue" title='Test5' />
      <Lesson top={300} height={20} color="purple" title='Test6' />
    </div>
  );
}

export default Day;