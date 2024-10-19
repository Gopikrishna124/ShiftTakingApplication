import "./App.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import MyShifts from "./Pages/MyShifts/MyShifts";
import Report from "./Pages/Report/Report";
import Staff from "./Pages/Staff/Staff";
import Account from "./Pages/Account/Account";
import UpdatePassword from "./Pages/UpdatePassword/UpdatePassword";
import ShiftDetails from "./Pages/ShiftDetails/ShiftDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ResetPassword />,
    },
    {
      path: "/myshifts",
      element: <MyShifts />,
    },
    {
      path: "/shift/:id",
      element: <ShiftDetails/>,
    },
    {
      path: "/report",
      element: <Report />,
    },
    {
      path: "/staff",
      element: <Staff />,
    },
    {
      path: "/myaccount",
      element: <Account />,
    },
    {
      path: "/reset/KsJhRzLbWgVn4fE2aZpXqYcDxuIo0mKsJhRzLbWgVn4fE2a",
      element: <UpdatePassword />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
