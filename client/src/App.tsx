import { Home, Details } from '~/pages';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import { LayoutComponent } from '~/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '~/global-states/store/store';
import { Provider } from 'react-redux';

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
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
