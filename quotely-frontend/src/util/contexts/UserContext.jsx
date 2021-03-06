// add UserContext functionality here
import { useState, createContext, useContext } from "react";

const NewUserContext = createContext();

export function UserProvider(props) {
  const [authenticated, setAuthenticated] = useState(false);

  function authenticate(props) {
    console.log(props);
    setAuthenticated(true);
  }

  return (
    <NewUserContext.Provider value={{ authenticate, authenticated }}>
      {props.children}
    </NewUserContext.Provider>
  );
}

export const useUserContext = () => {
  const { authenticate, authenticated } = useContext(NewUserContext);
  return { authenticate, authenticated };
};
