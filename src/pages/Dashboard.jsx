import StatsCard from "../components/StatsCard";
import DeliveryTable from "../components/DeliveryTable";
import "../styles/Dashboard.css";
import "../styles/StatsCard.css";

/* The main landing page of FleetTrack.
Displays stats overview and active deliveries table.
 */
function Dashboard({ deliveries, setDeliveries }) {
  return (
    <div className="dashboard-container">
      {/* Page header */}
      <div className="dashboard-header">
        <h1>FleetTrack Dashboard</h1>
        <p>Logistics overview</p>
      </div>

      {/* Summary stat cards - currently hardcoded except for Active Deliveries, which comes from live deliveries state */}
      <div className="stats-grid">
        <StatsCard title="Total Trucks" value="48" icon="🚛" color="#f97316" />
        <StatsCard
          title="Active Deliveries"
          value={deliveries.length}
          icon="📦"
          color="#3b82f6"
        />
        <StatsCard
          title="Drivers On Duty"
          value="34"
          icon="👤"
          color="#22c55e"
        />
        <StatsCard
          title="Maintenance Alerts"
          value="3"
          icon="⚠️"
          color="#ef4444"
        />
      </div>

      {/* Delivery table - recieves full deliveries state and setter for add/delete */}
      <DeliveryTable deliveries={deliveries} setDeliveries={setDeliveries} />
    </div>
  );
}

export default Dashboard;
