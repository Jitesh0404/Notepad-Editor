import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  const user = useSelector((state) => state.user.user);
  console.log("User is : ", user);
  return user ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
