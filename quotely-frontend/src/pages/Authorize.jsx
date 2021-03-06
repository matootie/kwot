import DiscordAuth from "./../components/DiscordAuth";

function Authorize(){  
  return(
    <div>
      You are being authorized
      { <DiscordAuth />}
    </div>

)};

export default Authorize;