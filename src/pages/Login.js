import { useAuth0 } from "@auth0/auth0-react"

export default function Login() {

  const { loginWithRedirect } = useAuth0()

  return (
    <div className="flex flex-col h-screen justify-center items-center px-10">
      <img
        className="w-full max-w-md transform -rotate-3"
        src="/logo.png"
        alt="Kwot Logo"
      />
      <div className="mt-8">
        <button
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-colors"
          onClick={loginWithRedirect}
        >
          Get Started
        </button>        
      </div>
    </div>
  )
}
