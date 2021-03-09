import React from "react";
import { Redirect } from "react-router";

import {
  getAccessTokenFromURL,
  getAccessTokenCookie,
  setAccessTokenCookie
} from "../utils/auth";


export default function Authorize() {

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

  const accessToken = getAccessTokenFromURL();
  setAccessTokenCookie(accessToken);

  return (
    <div>
      You are being authorized
      <Redirect to="/" />
    </div>
  );
}
