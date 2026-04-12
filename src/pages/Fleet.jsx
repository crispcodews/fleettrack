
import "../styles/Fleet.css";

function Fleet() {
  const trucks = [
    {
      id: 1,
      truckId: "T-104",
      status: "Active",
      driver: "Sarah Lee",
      lastMaintenance: "2024-03-15",
    },
    {
      id: 2,
      truckId: "T-221",
      status: "Active",
      driver: "Mike Chen",
      lastMaintenance: "2024-02-28",
    },
    {
      id: 3,
      truckId: "T-332",
      status: "In Service",
      driver: "Carlos Diaz",
      lastMaintenance: "2024-04-01",
    },
    {
      id: 4,
      truckId: "T-445",
      status: "Active",
      driver: "Jessica Williams",
      lastMaintenance: "2024-03-20",
    },
    {
      id: 5,
      truckId: "T-556",
      status: "PTO",
      driver: "David Martinez",
      lastMaintenance: "2023-12-10",
    },
    {
      id: 6,
      truckId: "T-667",
      status: "Active",
      driver: "Emily Johnson",
      lastMaintenance: "2024-03-30",
    },
];

  function getStatusClass(status) {
    if (status === "Active") return "status-active";
    if (status === "In Service") return "status-service";
    return "status-pto";
  }

  return (
    <div className="fleet-container">
      <div className="fleet-header">
        <h1>Fleet Management</h1>
        <p>Overview of all trucks in your fleet</p>
      </div>

      <div className="fleet-stats">
        <div className="stat-box">
          <span className="stat-number">
            {trucks.filter((t) => t.status === "Active").length}
          </span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">
            {trucks.filter((t) => t.status === "In Service").length}
          </span>
          <span className="stat-label">In Service</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">
            {trucks.filter((t) => t.status === "PTO").length}
          </span>
          <span className="stat-label">PTO</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{trucks.length}</span>
          <span className="stat-label">Total Trucks</span>
        </div>
      </div>

      <div className="fleet-grid">
        {trucks.map((truck) => (
          <div key={truck.id} className="truck-card">
            <div className="truck-card-header">
              <h2>{truck.truckId}</h2>
              <span
                className={`status-badge ${getStatusClass(truck.status)}`}
              ></span>
            </div>
            <div className="truck-card-body">
              <p>
                <span className="label">Driver</span>
                {truck.driver}
              </p>
              <p>
                <span className="label">Last Maintenance</span>
                {truck.lastMaintenance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fleet;
