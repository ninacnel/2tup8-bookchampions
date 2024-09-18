import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/home/Dashboard";
import Login from "./components/form/Login";
import Comments from "./components/comments/Comments";
import Protected from "./components/routes/Protected";
import { useState } from "react";
import BookDetails from "./components/bookDetails/BookDetails";
import NotFound from "./components/routes/NotFound";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const loginHandler = ()=>{
    setIsLogged(true);
  }

  const router = createBrowserRouter([
    { path: "/", element: <Dashboard/>},
    { path: "/login", element: <Login onLogin={loginHandler} />},
    { path: "/comments", element: (
      <Protected isSignedIn={isLogged}>
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