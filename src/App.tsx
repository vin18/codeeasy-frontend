import { Container } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './services/router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxW="1200px">
        <RouterProvider router={router} />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
