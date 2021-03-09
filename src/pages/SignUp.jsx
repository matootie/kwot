import { Redirect } from "react-router-dom"
import { FaDiscord } from "react-icons/fa"
import { getDiscordAuthURL, getAccessTokenCookie } from "../utils/auth"


export default function SignUp() {

  if (getAccessTokenCookie()) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: {
            message: "You are already signed in"
          }
        }}
      />
    )
  }

  const auth_url = getDiscordAuthURL();

  return (
    <div className={"flex flex-col h-screen justify-center items-center"}>
      <img
        className="w-64 h-64 transform -rotate-3"
        src="/Kwot_App.png"
        alt="Kwot Logo"
      />
      <div className="mt-8">
        <a
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-discord-white bg-discord-blue hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          href={auth_url}
        >
          <FaDiscord className="w-6 h-6 mr-2" />
          Continue with Discord
        </a>
      </div>
    </div>
  );
}
