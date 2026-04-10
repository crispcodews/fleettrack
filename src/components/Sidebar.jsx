import { Link, useLocation } from "react-router-dom";
import {MdDashboard, MdLocalShipping, MdPerson, MdDirectionsCar, MdAnalytics } from 'react-icons/md';


function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "40px" }}>🚛 FleetTrack</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: isActive("/") ? "#f97316" : "transparent",
              fontWeight: isActive("/") ? "600" : "400",
              transition: "all 0.3s ease",
            }}
          >
            <MdDashboard size={20} />
            Dashboard
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/deliveries"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: isActive("/deliveries")
                ? "#f97316"
                : "transparent",
              fontWeight: isActive("/deliveries") ? "600" : "400",
              transition: "all 0.3s ease",
            }}
          >
            <MdLocalShipping size={20} />
            Deliveries
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/drivers"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: isActive("/drivers") ? "#f97316" : "transparent",
              fontWeight: isActive("/drivers") ? "600" : "400",
              transition: "all 0.3s ease",
            }}
          >
            <MdPerson size={20} />
            Drivers
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/fleet"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: isActive("/fleet") ? "#f97316" : "transparent",
              fontWeight: isActive("/fleet") ? "600" : "400",
              transition: "all 0.3s ease",
            }}
          >
            <MdDirectionsCar size={20} />
            Fleet
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link
            to="/analytics"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "8px",
              backgroundColor: isActive("/analytics")
                ? "#f97316"
                : "transparent",
              fontWeight: isActive("/analytics") ? "600" : "400",
              transition: "all 0.3s ease",
            }}
          >
            <MdAnalytics size={20} />
            Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
