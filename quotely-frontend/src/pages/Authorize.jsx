import React from 'react';
//util
import { getAccessTokenFromURL, setAccessTokenCookie } from "./../util/discordAuth";
import { useUserContext } from "./../util/contexts/"
import { Redirect } from "react-router";

function Authorize(){
  const { setToken, authenticate } = useUserContext();
  const accessToken = getAccessTokenFromURL();
  setAccessTokenCookie(accessToken);
  setToken(accessToken);
  authenticate(true);

  return(
    <div>
      You are being authorized
      <Redirect to="/"/>
    </div>

)};

export default Authorize;