import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdLocalShipping,
  MdPerson,
  MdDirectionsCar,
  MdAnalytics,
  MdMenu,
  MdClose,
} from "react-icons/md";
import "../styles/Sidebar.css";

/* Renders the fixed left-hand navigation panel for the FleetTrack app. 
Highlights the active route using React Router's current location.
*/
function Sidebar() {
  // useLocation gives the current url path so we can highlight the active link
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  /* Checks if a given route path matches the current URL.
Used to apply active highlight styles to the matching nav link.
@param {string} path - The route path to check (e.g., "deliveries")
@returns {boolean} True if the path matches the current location
 */
  const isActive = (path) => {
    return location.pathname === path;
  };

  /* Generates the inline style object for a nav link.
  Applies an orange highlight and bold font when the link is active.
  @param {string} path - The route path this link points to
  @returns {object} Inline style object for the link element
   */
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

  const navLinks = (
    <ul style={{ listStyle: " none", padding: 0 }}>
      <li style={{ marginBottom: " 10px" }}>
        <Link
          to="/"
          style={getLinkStyle("/")}
          onClick={() => setMenuOpen(false)}
        >
          <MdDashboard size={20} /> Dashboard
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/deliveries"
          style={getLinkStyle("/deliveries")}
          onClick={() => setMenuOpen(false)}
        >
          <MdLocalShipping size={20} /> Deliveries
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/drivers"
          style={getLinkStyle("/drivers")}
          onClick={() => setMenuOpen(false)}
        >
          <MdPerson size={20} /> Drivers
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/fleet"
          style={getLinkStyle("/fleet")}
          onClick={() => setMenuOpen(false)}
        >
          <MdDirectionsCar size={20} /> Fleet
        </Link>
      </li>
      <li style={{ marginBottom: "10px" }}>
        <Link
          to="/analytics"
          style={getLinkStyle("/analytics")}
          onClick={() => setMenuOpen(false)}
        >
          <MdAnalytics size={20} /> Analytics
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      {/* Hamburger button — only visible on mobile */}
      <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
      </button>

      {/* Mobile dropdown menu - shown when menuOpen is true */}
      {menuOpen && (
        <div className="sidebar-mobile">
          <h2 style={{ marginBottom: "20px" }}>🚛 FleetTrack</h2>
          {navLinks}
        </div>
      )}

      {/* Desktop sidebar - always visible on screens 768px and wider */}
      <div className="sidebar-desktop">
        <h2 style={{ marginBottom: "40px" }}>🚛 FleetTrack</h2>
        {navLinks}
      </div>
    </>
  );
}

export default Sidebar;
