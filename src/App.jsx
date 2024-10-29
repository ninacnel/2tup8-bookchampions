import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/home/Dashboard";
import Login from "./components/form/Login";
import Comments from "./components/comments/Comments";
import Protected from "./components/routes/Protected";
import BookDetails from "./components/bookDetails/BookDetails";
import NotFound from "./components/routes/NotFound";
import ReadingList from "./components/readingList/ReadingList";
import Layout from "./components/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: (
        <Layout>
          <Dashboard />
        </Layout>
      )
    },
    {
      path: "/login", element: (
        <Layout>
          <Login />
        </Layout>
      )
    },
    {
      path: "/comments", element: (
        <Protected>
          <Layout>
            <Comments />
          </Layout>
        </Protected>
      )
    },
    {
      path: "/book/:id", element: (
        <Layout>
          <BookDetails />
        </Layout>
      )
    },
    { path: "/reading", element: <ReadingList /> },
    {
      path: "*", element: (
        <Layout>
          <NotFound />
        </Layout>
      )
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;