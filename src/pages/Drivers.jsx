import { useState } from "react";
import "../styles/Drivers.css";

function Drivers() {
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newTruck, setNewTruck] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newStatus, setNewStatus] = useState("Active");
  const [nextId, setNextId] = useState(7);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "Sarah Lee",
      status: "Active",
      truck: "T-104",
      location: "Dallas, TX",
      phone: "(555) 123-4567",
    },
    {
      id: 2,
      name: "Mike Chen",
      status: "Active",
      truck: "T-221",
      location: "Boston, MA",
      phone: "(555) 234-5678",
    },
    {
      id: 3,
      name: "Carlos Diaz",
      status: "On Break",
      truck: "T-332",
      location: "Miami, FL",
      phone: "(555) 345-6789",
    },
    {
      id: 4,
      name: "Jessica Williams",
      status: "Active",
      truck: "T-445",
      location: "Chicago, IL",
      phone: "(555) 456-7890",
    },
    {
      id: 5,
      name: "David Martinez",
      status: "Inactive",
      truck: "T-556",
      location: "Phoenix, AZ",
      phone: "(555) 567-8901",
    },
    {
      id: 6,
      name: "Emily Johnson",
      status: "Active",
      truck: "T-667",
      location: "Seattle, WA",
      phone: "(555) 678-9012",
    },
  ]);

  const [search, setSearch] = useState("");

  function getStatusClass(status) {
    if (status === "Active") return "status-active";
    if (status === "On Break") return "status-break";
    return "status-inactive";
  }

  function addDriver() {
    if (!newName || !newTruck || !newLocation || !newPhone) {
      alert("Please fill in all fields");
      return;
    }

    const driver = {
      id: nextId,
      name: newName,
      status: newStatus,
      truck: newTruck,
      location: newLocation,
      phone: newPhone,
    };

    setDrivers([...drivers, driver]);
    setNextId(nextId + 1);
    setNewName("");
    setNewTruck("");
    setNewLocation("");
    setNewPhone("");
    setNewStatus("Active");
    setShowForm(false);
  }

  const filteredDrivers = drivers.filter((driver) => {
    if (!search) return true;
    const term = search.toLowerCase();
    return (
      driver.name.toLowerCase().includes(term) ||
      driver.truck.toLowerCase().includes(term) ||
      driver.location.toLowerCase().includes(term)
    );
  });

  return (
    <div className="drivers-container">
      <div className="drivers-header">
        <h1>Driver Management</h1>
        <p>Manage your fleet drivers and their assignments</p>
      </div>

      <div className="drivers-controls">
        <input
          type="text"
          placeholder="Search drivers, trucks, or locations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="drivers-search"
        />
        <button
          className="add-driver-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "+ Add Driver"}
        </button>
      </div>

      <div className="drivers-stats">
        <div className="stat-box">
          <span className="stat-number">
            {drivers.filter((d) => d.status === "Active").length}
          </span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">
            {drivers.filter((d) => d.status === "On Break").length}
          </span>
          <span className="stat-label">On Break</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">
            {drivers.filter((d) => d.status === "Inactive").length}
          </span>
          <span className="stat-label">Inactive</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{drivers.length}</span>
          <span className="stat-label">Total Drivers</span>
        </div>
      </div>

      {showForm && (
        <div className="add-driver-form">
          <input
            placeholder="Full Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            placeholder="Truck (e.g T-778)"
            value={newTruck}
            onChange={(e) => setNewTruck(e.target.value)}
          />
          <input
            placeholder="Location (e.g. Dallas, TX)"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
          />
          <input
            placeholder="Phone (e.g. (555) 123-4567)"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option>Active</option>
            <option>On Break</option>
            <option>Inactive</option>
          </select>
          <button className="add-driver-btn" onClick={addDriver}>
            Save Driver
          </button>
        </div>
      )}

      <table className="drivers-table">
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Status</th>
            <th>Assigned Truck</th>
            <th>Current Location</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDrivers.map((driver) => (
            <tr key={driver.id}>
              <td className="driver-name">{driver.name}</td>
              <td>
                <span
                  className={`status-badge ${getStatusClass(driver.status)}`}
                >
                  {driver.status}
                </span>
              </td>
              <td>{driver.truck}</td>
              <td>{driver.location}</td>
              <td>{driver.phone}</td>
              <td>
                <button className="action-btn" onClick={() => setSelectedDriver(driver)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDriver && (
        <div className="driver-details">
            <div className="driver-details-heading">
                <h2>{selectedDriver.name}</h2>
                <button className="close-btn" onClick={() => setSelectedDriver(null)}>x Close</button>
            </div>
            <div className="driver-details-body">
                <div className="detail-item">
                    <span className="detail-label">Status</span>
                    <span className={`status-badge ${getStatusClass(selectedDriver.status)}`}>selectedDriver.status</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Assigned Truck</span>
                    <span>{selectedDriver.truck}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label">Location</span>
                    <span>{selectedDriver.location}</span>
                </div>
                <div className="detail-item">
                    <span className="detail-label"></span>
                    <span>{selectedDriver.phone}</span>
                </div>
            </div>
        </div>
      )}

      {filteredDrivers.length === 0 && (
        <div className="no-results">No drivers found matching "{search}"</div>
      )}
    </div>
  );
}

export default Drivers;
