import React from "react";
//util
import {
  getAccessTokenFromURL,
  setAccessTokenCookie,
} from "../util/auth/discordAuth";
import { useUserContext } from "./../util/contexts/";
import { Redirect } from "react-router";

function Authorize() {
  const { setToken } = useUserContext();
  const accessToken = getAccessTokenFromURL();
  setAccessTokenCookie(accessToken);
  setToken(accessToken);

  return (
    <div>
      You are being authorized
      <Redirect to="/" />
    </div>
  );
}

export default Authorize;
