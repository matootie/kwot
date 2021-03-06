import { Redirect, Route } from "react-router";
import Cookies from "js-cookie";

export default function PrivateRoute({ component: Component, props, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        Cookies.get("JWT") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `/login`,
              state: {
                message: "You need to be signed in to view this page",
              },
            }}
          />
        )
      }
    />
  );
}
