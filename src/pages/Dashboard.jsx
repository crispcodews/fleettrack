import { useState } from 'react';
import StatsCard from '../components/StatsCard';
import DeliveryTable from '../components/DeliveryTable';
import '../styles/Dashboard.css';
import '../styles/StatsCard.css';

function Dashboard() {
  const[deliveries, setDeliveries] = useState([
    { id: 1, driver: "Sarah Lee", truck: "T-104", route: "Dallas → LA", status: "In Transit" },
    { id: 2, driver: "Mike Chen", truck: "T-221", route:"NY → Boston", status: "Delivered" },
    { id: 3, driver: "Carlos Diaz", truck: "T-332", route: "Houston → Miami", status: "Delayed" },
  ]);
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>FleetTrack Dashboard</h1>
        <p>Logistics overview</p>
      </div>

      <div className="stats-grid">
        <StatsCard title="Total Trucks" value="48" />
        <StatsCard title="Active Deliveries" value={deliveries.length} />
        <StatsCard title="Drivers On Duty" value="34" />
        <StatsCard title="Maintenance Alerts" value="3"/>
      </div>

      <DeliveryTable deliveries={deliveries} setDeliveries={setDeliveries} />
    </div>
  );
}

export default Dashboard;