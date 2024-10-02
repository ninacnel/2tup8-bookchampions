import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/home/Dashboard";
import Login from "./components/form/Login";
import Comments from "./components/comments/Comments";
import Protected from "./components/routes/Protected";
import BookDetails from "./components/bookDetails/BookDetails";
import NotFound from "./components/routes/NotFound";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard/>},
    { path: "/login", element: <Login />},
    { path: "/comments", element: (
      <Protected>
        <Comments/>
      </Protected>
    )},
    { path: "/book/:id", element: <BookDetails/>},
    { path: "*", element: <NotFound/>}
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;