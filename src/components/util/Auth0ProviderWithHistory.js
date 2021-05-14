import { useHistory } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react"

export default function Auth0ProviderWithHistory({ children }) {
  const history = useHistory()
  
  function onRedirectCallback(appState) {
    history.push(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain="kwot.us.auth0.com"
      clientId="oeNFVOmIVDfm2eIwQVf86THEAimVgI0V"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience="philosopher"
    >
      {children}
    </Auth0Provider>
  )
}
