import LoginCard from "./../components/LoginCard";

export default function Welcome() {
  const bg = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600";
  return (
    <div className={"flex flex-col " + bg + " h-screen justify-evenly"}>
      <div className="text-9xl text-mono text-center py-3">
        Quotes from Space
      </div>
      <div className="mx-auto">
        {<LoginCard />}
      </div>
    </div>
  );
}
