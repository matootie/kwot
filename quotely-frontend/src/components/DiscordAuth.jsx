import React from "react";

// contexts
import { useUserContext } from "./../util/contexts/";

import { Redirect } from "react-router-dom";

function getAccessToken() {
  const raw_url = window.location.href;
  const accessToken = raw_url.match(/(?<=access_token=)\w+(?=$|&)/);
  return accessToken;
}

function DiscordAuth() {
  const accessToken = getAccessToken();

  const { setToken } = useUserContext();
  setToken(accessToken);
  return (
    <div>
      <Redirect to="/"></Redirect>
    </div>
  );
}

export default DiscordAuth;
