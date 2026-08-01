
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdLocalShipping,
  MdPerson,
  MdDirectionsCar,
  MdAnalytics,

} from "react-icons/md";
import "../styles/Sidebar.css";

/* Navigation config - shared between desktop sidebar and mobile bottom bar */

const navItems = [
  { path: "/", label: "Dashboard", icon: MdDashboard },
  { path: "/deliveries", label: "Deliveries", icon: MdLocalShipping },
  { path: "/drivers", label: "Drivers", icon: MdPerson },
  { path: "/fleet", label: "Fleet", icon: MdDirectionsCar },
  { path: "/analytics", label: "Analytics", icon: MdAnalytics },
];

/* Renders navigation for FleetTrack app.
Desktop: fixed left sidebar.
Mobile: fixed bottom tab bar
Highlights the active route using React Router's current location */

function Sidebar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  const getLinkStyle = (path) => ({
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    borderRadius: "8px",
    backgroundColor: isActive(path) ? "#f97316" : "transparent",
    fontWeight: isActive(path) ? "600" : "400",
    transition: "all 0.3s ease",
  });

   return (
    <>
      {/* Desktop sidebar - visible on screens 768px and wider */}
      <div className="sidebar-desktop">
        <h2 style={{ marginBottom: "40px" }}>🚛 FleetTrack</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {navItems.map(({ path, label, icon: Icon }) => (
            <li key={path} style={{ marginBottom: "10px" }}>
              <Link to={path} style={getLinkStyle(path)}>
                <Icon size={20} /> {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile bottom tab bar - visible below 768px */}
      <nav className="bottom-nav">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`bottom-nav-item ${isActive(path) ? "active" : ""}`}
          >
            <Icon size={22} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Sidebar;