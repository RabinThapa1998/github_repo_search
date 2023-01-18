import { Home, Details } from '~/pages';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import { LayoutComponent } from '~/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LayoutComponent>
        <Home />
      </LayoutComponent>
    ),
  },
  {
    path: '/:id',
    element: (
      <LayoutComponent>
        <Details />
      </LayoutComponent>
    ),
  },
]);
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
