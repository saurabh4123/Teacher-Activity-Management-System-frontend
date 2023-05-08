import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AdminDashboard from "../pages/AdminDashboard";
import TeacherDashboard from "../pages/TeacherDashboard";
import ActivityRegistration from "../pages/ActivityRegistration";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path={routes.LoginPage} element={<Login />} />
        <Route path={routes.Registration} element={<Registration />} />
        <Route path={routes.AdminDashboard} element={<AdminDashboard />} />
        <Route path={routes.TeacherDashboard} element={<TeacherDashboard />} />
        <Route
          path={routes.ActivityRegistration}
          element={<ActivityRegistration />}
        />
        <Route path="/*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
