import Cookies from "js-cookie";


export function getAccessTokenFromURL() {
  const raw_url = window.location.href;
  const accessToken = raw_url.match(/(?<=access_token=)\w+(?=$|&)/);
  return accessToken;
}

export function setAccessTokenCookie(accessToken){
    Cookies.set("access_token", accessToken);

}

export function getAccessTokenCookie(){
    return Cookies.get("access_token")
}



