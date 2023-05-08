import React from "react";
import { Link } from "react-router-dom";
import routes from "../router/routes";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="btn btn-primary" to={routes.LoginPage}>
        Login
      </Link>

      <Link className="btn btn-primary" to={routes.Registration}>
        Registration
      </Link>

      <Link className="btn btn-primary" to={routes.TeacherDashboard}>
        Teacher Dashboard
      </Link>

      <Link className="btn btn-primary" to={routes.AdminDashboard}>
        Admin Dashboard
      </Link>

      <Link className="btn btn-primary" to={routes.ActivityRegistration}>
        Activity Registration
      </Link>
    </div>
  );
}

export default Navbar;
