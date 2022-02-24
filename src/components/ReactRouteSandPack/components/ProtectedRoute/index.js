import { Redirect, Route } from "react-router-dom";
import Cookie from "js-cookie";

const ProtectedRoute = (props) => {
  const tokenOld = Cookie.get("jwt_token");
  const token = localStorage.getItem("jwt_token");
  if (token === undefined) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
