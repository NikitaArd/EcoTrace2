import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './layout/Root';

import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/home', element: <Home/>
      }
    ],
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
