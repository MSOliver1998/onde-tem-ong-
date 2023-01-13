import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";

const ProtectedRoutes = () => {
  const { loading } = useContext(AuthContext);
  const token = localStorage.getItem("@token");

  if (loading) {
    return <LoadingPage />;
  }

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
