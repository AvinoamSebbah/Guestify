// routing
import Routes from "./routes";

// React Query
import { QueryClient, QueryClientProvider } from "react-query";

import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => ( 
  <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
  </LanguageProvider>
);
export default App;