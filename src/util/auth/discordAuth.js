import Cookies from "js-cookie";

export function getAccessTokenFromURL() {
  const raw_url = window.location.href;
  const accessToken = raw_url.match(/(?<=access_token=)\w+(?=$|&)/);
  return accessToken.pop();
}

export function setAccessTokenCookie(accessToken) {
  Cookies.set("access-token", accessToken, { expires: 7, sameSite: "strict" });
}

export function getAccessTokenCookie() {
  return Cookies.get("access-token");
}

export function getDiscordAuthURL(){
  const baseAuthURL = "https://discord.com/api/oauth2/authorize?response_type=token&client_id=817564307121635348&scope=identify&redirect_uri=";
  const decodedRedirectURI = `${process.env.REACT_APP_BASE_URL || "http://localhost:3000"}/authorize`;
  const encodedRedirectURI = encodeURI(decodedRedirectURI);
  const discordAuthURL = baseAuthURL.concat(encodedRedirectURI);
  return discordAuthURL;
}
