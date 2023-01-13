import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import DashboardLoggedPage from "./pages/DashboardLoggedPage/DashboardLoggedPage";
import DashboardVisitorPage from "./pages/DashboardVisitorPage/DashboardVisitorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfileUserPage from "./pages/ProfileUserPage/ProfileUserPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfileOngPage from "./pages/ProfileOngPage/ProfileOngPage";
import { AuthContext } from "./contexts/AuthContext/AuthContext";

export const RoutesComponent = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<DashboardVisitorPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/profile"
          element={
            userInfo.userType === "user" ? (
              <ProfileUserPage />
            ) : (
              <ProfileOngPage />
            )
          }
        />
        <Route path="/dashboard" element={<DashboardLoggedPage />} />
      </Route>
    </Routes>
  );
};
