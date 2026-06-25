import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import EmpTable from "./EmpTable";
import ListEmployees from "./EmpResults";

const Home = () => {
  return (
    <div>

      <Navbar />

      {/* HOME SECTION */}
      <section id="home" className="hero-section">

        <h1>Employee Management System</h1>

        <p>
          Manage employees, details and payroll efficiently.
        </p>

      </section>

      {/* DASHBOARD SECTION */}
      <section id="dashboard" className="dashboard-section">

        <h2>Dashboard</h2>

        {/* Your existing components */}
        <EmpTable />
        <ListEmployees />

      </section>

    </div>
  );
};

export default Home;