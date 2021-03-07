// add UserContext functionality here
import { useState, createContext, useContext } from "react";

const NewUserContext = createContext();

export function UserProvider(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState("");

  function authenticate(props) {
    setAuthenticated(props);
  }

  function setToken(token) {
    if (token) {
      authenticate(true);
    } else {
      authenticate(false);
    }
    setUserToken(token);
  }

  return (
    <NewUserContext.Provider
      value={{ authenticate, authenticated, userToken, setToken }}
    >
      {props.children}
    </NewUserContext.Provider>
  );
}

export const useUserContext = () => {
  const { authenticate, authenticated, userToken, setToken } = useContext(
    NewUserContext
  );
  return { authenticate, authenticated, userToken, setToken };
};
