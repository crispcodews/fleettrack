import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdLocalShipping,
  MdPerson,
  MdDirectionsCar,
  MdAnalytics,
} from "react-icons/md";

/* Renders the fixed left-hand navigation panel for the FleetTrack app. 
Highlights the active route using React Router's current location.
*/
function Sidebar() {
  // useLocation gives the current url path so we can highlight the active link
  const location = useLocation();

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

  return (
    //Sidebar container - fixed width, full viewport height
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "20px",
      }}
    >
      {/* App logo / brand name */}
      <h2 style={{ marginBottom: "40px" }}>🚛 FleetTrack</h2>

      {/* Navigation link list */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* Dashboard */}
        <li style={{ marginBottom: "10px" }}>
          <Link to="/" style={getLinkStyle("/")}>
            <MdDashboard size={20} />
            Dashboard
          </Link>
        </li>

        {/* Deliveries */}
        <li style={{ marginBottom: "10px" }}>
          <Link to="/deliveries" style={getLinkStyle("/deliveries")}>
            <MdLocalShipping size={20} />
            Deliveries
          </Link>
        </li>

        {/* Drivers */}
        <li style={{ marginBottom: "10px" }}>
          <Link to="/drivers" style={getLinkStyle("/drivers")}>
            <MdPerson size={20} />
            Drivers
          </Link>
        </li>

        {/* Fleet */}
        <li style={{ marginBottom: "10px" }}>
          <Link to="/fleet" style={getLinkStyle("/fleet")}>
            <MdDirectionsCar size={20} />
            Fleet
          </Link>
        </li>

        {/* Analytics */}
        <li style={{ marginBottom: "10px" }}>
          <Link to="/analytics" style={getLinkStyle("/analytics")}>
            <MdAnalytics size={20} />
            Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
