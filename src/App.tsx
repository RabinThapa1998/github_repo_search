import { Home, Details } from '~/pages';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import { LayoutComponent } from '~/components';

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
function App() {
  return <RouterProvider router={router} />;
}

export default App;
