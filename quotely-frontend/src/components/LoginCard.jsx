export default function LoginCard() {
  const button = "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500";

  const base_auth_url ="https://discord.com/api/oauth2/authorize?response_type=token&client_id=817564307121635348&scope=identify&redirect_uri=";
  const redirect = encodeURI("http://localhost:3000/authorize");
  const auth_url = base_auth_url.concat(redirect);

  return (
    <div className="flex flex-col justify-evenly rounded-md shadow-2xl h-44 w-max bg-gray-300">
      <a
        className={
          button + " px-10 py-5 rounded-md shadow-xl text-mono text-2xl mx-20"
        }
        href={auth_url}
      >
        Signin With Discord
      </a>
    </div>
  );
}
