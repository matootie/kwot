import LoginCard from "../components/LoginCard";

export default function SignUp() {
  return (
    <div className={"flex flex-col h-screen justify-center items-center"}>
      <img
        className="w-64 h-64 transform -rotate-3"
        src="/Kwot_App.png"
        alt="Kwot Logo"
      />
      <div className="mt-8">
        <LoginCard />
      </div>
    </div>
  );
}
