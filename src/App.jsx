import { QueryClient, QueryClientProvider } from "react-query";

import Routes from "./Routes";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

export default function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </div>
  )
}
