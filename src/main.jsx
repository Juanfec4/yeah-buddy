import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Route, Link, Outlet } from "react-router-dom";
import ExercisesPage from "./pages/exerciseList/index.jsx";
import AddExercisePage from "./pages/addExercise/index.jsx";
import EditExercisePage from "./pages/editExercise/index.jsx";
import AddRoutinePage from "./pages/addRoutine/index.jsx";
import EditRoutinePage from "./pages/editRoutine/index.jsx";
import RoutineListPage from "./pages/routineList/index.jsx";
import Navbar from "./components/ui/navbar/index.jsx";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "exercises",
        element: <ExercisesPage />,
      },
      {
        path: "exercises/add",
        element: <AddExercisePage />,
      },
      {
        path: "exercises/edit",
        element: <EditExercisePage />,
      },
      {
        path: "routines",
        element: <RoutineListPage />,
      },
      {
        path: "routines/add",
        element: <AddRoutinePage />,
      },
      {
        path: "routines/edit",
        element: <EditRoutinePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
