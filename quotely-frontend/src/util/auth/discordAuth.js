import Cookies from "js-cookie";

export function getAccessTokenFromURL() {
  const raw_url = window.location.href;
  console.log("RAW: ", raw_url);
  const accessToken = raw_url.match(/(?<=access_token=)\w+(?=$|&)/);
  return accessToken.pop();
}

export function setAccessTokenCookie(accessToken) {
  Cookies.set("access-token", accessToken, { sameSite: "strict" });
}

export function getAccessTokenCookie() {
  return Cookies.get("access-token");
}
