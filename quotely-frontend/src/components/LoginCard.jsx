import { getDiscordAuthURL } from './../util/auth/discordAuth'
import { FaDiscord } from 'react-icons/fa'

export default function LoginCard() {
  const auth_url = getDiscordAuthURL();

  return (
    <a 
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-discord-white bg-discord-blue hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      href={auth_url}
    >
      <FaDiscord className="w-6 h-6 mr-2" />
      Continue with Discord
    </a>
  );
}
