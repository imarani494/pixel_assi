
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductListing from "./components/ProductListing";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductListing />
    </QueryClientProvider>
  );
}

export default App;
