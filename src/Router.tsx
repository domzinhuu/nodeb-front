import { Navigate, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { LoginPage } from "./pages/Login";
import { DashboardPage } from "./pages/Dashboard";

export function NodebRouter() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}
