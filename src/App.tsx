import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import Home from './pages/Home';
import Products from './pages/Products';
import { Container } from '@chakra-ui/react';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Container maxW="1200px">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </Container>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
