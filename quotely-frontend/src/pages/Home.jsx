// components
import Content from "./../components/Content";

export default function Home() {
  const bg = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 ";
  return (
    <div className={bg + "flex flex-col h-screen justify-evenly"}>
      <div className="text-9xl text-center font-serif pt-3">"KWOT"</div>
      <Content />
    </div>
  );
}
