import { Route, Switch } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

import Loading from "components/Loading"
import Login from "pages/Login"
import Home from "pages/Home"
import Quotes from "pages/Quotes"
import Profile from "pages/Profile"

export default function App() {

  const {
    isLoading,
    isAuthenticated,
    error
  } = useAuth0()

  console.log("Rendering app...")

  if (isLoading) {
    console.log("Authentication is loading...")
    return (
      <div className="h-screen">
        <Loading />
      </div>
    )
  }

  if (error) {
    console.log("Authentication error", error)
    return <div>Oops... {error.message}</div>
  }

  if (isAuthenticated) {
    console.log("Successful authentication.")
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/quotes" component={Quotes} exact />
        <Route path="/author/:nickname" component={Profile} />
      </Switch>
    )
  } else {
    console.log("Unable to authenticate.")
    return (
      <Login />
    )
  }
}
