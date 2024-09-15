import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./components/ErrorPage";
import Movie from "./pages/Movie"; // Handles the movie detail page with the id parameter
const routes = [
  {
    path:  "/",
    element: <Home />
  },
 
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  },
  {
    path: "*",
    element: <ErrorPage />, 
  },
];

export default routes;
