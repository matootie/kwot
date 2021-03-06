import Routes from "./Routes";
import { UserProvider } from "./util/contexts";
//import { UserProvider } from "./util/contexts";

function App() {
  // call user context wrapping routes
  return (
    <div className="App">
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
