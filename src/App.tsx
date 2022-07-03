import MainLayout from 'layouts/main';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
        <MainLayout />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
