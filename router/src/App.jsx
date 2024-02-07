import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import RootLayout from "./Components/RootLayout";
import Error from "./Errors/Error";
import Items from "./Components/Items";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Items />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
