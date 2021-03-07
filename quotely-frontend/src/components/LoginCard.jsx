import { getDiscordAuthURL } from './../util/auth/discordAuth'

export default function LoginCard() {
  const button = "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500";
  const auth_url = getDiscordAuthURL();

  return (
    <div className="flex flex-col justify-evenly rounded-md shadow-2xl h-44 w-max bg-gray-300">
      <a
        className={
          button + " px-10 py-5 rounded-md shadow-xl text-mono text-2xl mx-20"
        }
        href={auth_url}
      >
        Sign In With Discord
      </a>
    </div>
  );
}
