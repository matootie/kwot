import { UserProvider } from "./util/contexts";

import { QueryClient, QueryClientProvider } from "react-query";

import Routes from "./Routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
});

function App() {
  // call user context wrapping routes
  return (
    <div className="App">
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </UserProvider>
    </div>
  );
}

export default App;
