import { Link } from 'react-router-dom';

const AUTH_URL = process.env.AUTHORIZE_URL;
// component
// import LoginCard from "./../components/LoginCard";
export default function Welcome() {
  const bg = "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600";
  const button = "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500";
  return (
    <div className={"flex flex-col " + bg + " h-screen justify-evenly"}>
      <div className="text-9xl text-mono text-center py-3">
        Quotes from Space
      </div>
      <div className="mx-auto">
        {/* <LoginCard /> */}
        <a 
          className={button + " px-10 py-5 rounded-md shadow-xl text-mono text-2xl"} href="https://discord.com/api/oauth2/authorize?response_type=token&client_id=817564307121635348&scope=identify">
          Signin With Discord
        </a>
      </div>
    </div>
  );
}
