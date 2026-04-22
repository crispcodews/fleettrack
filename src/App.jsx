import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Deliveries from "./pages/Deliveries";
import Drivers from "./pages/Drivers";
import Fleet from "./pages/Fleet";
import Analytics from "./pages/Analytics";


/* App component 
Root component of the Fleetrack application.
Sets up the global router, shared layout, and top-level deliveries state that is shared between the Dasboard and Analytics pages. 
 */
function App() {
  /* Top-level deliveries state - shared across Dashboard and Analytics.
  Managed here so that adds/deletes in Dashboard are reflected in Analytics.
   */
  const [deliveries, setDeliveries] = useState([
    {
      id: 1,
      driver: "Sarah Lee",
      truck: "T-104",
      route: "Dallas → LA",
      status: "In Transit",
    },
    {
      id: 2,
      driver: "Mike Chen",
      truck: "T-221",
      route: "NY → Boston",
      status: "Delivered",
    },
    {
      id: 3,
      driver: "Carlos Diaz",
      truck: "T-332",
      route: "Houston → Miami",
      status: "Delayed",
    },
  ]);

  return (
    // BrowserRouter enables client-side routing throughout the app
    <BrowserRouter>
      {/* Outer flex row - Sidebar on the left, page content fills the rest */}
      <div style={{ display: "flex"}} className="app-layout">
        <Sidebar />
        {/* Main content area - renders the active route, light gray background */}
        <div
          style={{ flex: 1, backgroundColor: "#f5f5f5", minHeight: "100vh" }}
        >
          <Routes>
            {/* Dashboard recieves deliveries state and setter for add/delete */}
            <Route
              path="/"
              element={
                <Dashboard
                  deliveries={deliveries}
                  setDeliveries={setDeliveries}
                />
              }
            />
            <Route path="/deliveries" element={<Deliveries />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/fleet" element={<Fleet />} />
            {/* Analytics recieves deliveries as read-only for chart data */}
            <Route
              path="/analytics"
              element={<Analytics deliveries={deliveries} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
