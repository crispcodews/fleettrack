import { useState } from "react";
import '../styles/DeliveryTable.css';

function DeliveryTable({ deliveries, setDeliveries }) {
   

  
  const [nextId, setNextId] = useState(4);
  const [driver, setDriver] = useState("");
  const [truck, setTruck] = useState("");
  const [route, setRoute] = useState("");
  const [status, setStatus] = useState("In Transit");
  const [search, setSearch] = useState("");

  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  function addDelivery() {
    if (!driver || !truck || !route) {
      alert('Please fill in all fields');
      return;
    }

    const newDelivery = { 
      id: nextId,
      driver,
      truck,
      route,
      status,
    };

    setDeliveries([...deliveries, newDelivery]);
    setNextId(nextId + 1);
    setDriver("");
    setTruck("");
    setRoute("");
    setStatus("In Transit");
  }

  function deleteDelivery(idToDelete) {
   setDeliveries(deliveries.filter(delivery => delivery.id !== idToDelete));
  }

  function handleSort(field) {
    if(sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  }

  function getStatusClass(status) {
    if (status === "Delivered") return "status-delivered";
    if (status === "Delayed") return "status-delayed";
    return "status-transit";
  }

  return (
    <div className="delivery-table-container">
      <h2>Active Deliveries</h2>

      <div className="input-group">
        <input
          placeholder="Driver"
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
        />

        <input
          placeholder="Truck"
          value={truck}
          onChange={(e) => setTruck(e.target.value)}
        />

        <input
          placeholder="Route"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>In Transit</option>
          <option>Delivered</option>
          <option>Delayed</option>
        </select>

      <button onClick={addDelivery}>Add Delivery</button>
        
      </div>
      

      <input
        type="text"
        placeholder="Search driver, truck, or route"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    
      <table className="delivery-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("driver")}>
              Driver {sortField === 'driver' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort("truck")}>
              Truck {sortField === 'truck' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort("route")}>
              Route {sortField === 'route' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort("status")}>
              Status {sortField === 'status' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {deliveries
            .filter((delivery) => {
              if (!search) return true;
              const term = search.toLowerCase();
              return (
                delivery.driver.toLowerCase().includes(term) ||
                delivery.truck.toLowerCase().includes(term) ||
                delivery.route.toLowerCase().includes(term)
              );
            })
            .sort((a, b) => {
              if (!sortField) return 0;
              const aValue = a[sortField].toLowerCase();
              const bValue = b[sortField].toLowerCase();
              if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
              if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
              return 0;
            })
            .map((delivery) => (
              <tr key={delivery.id}>
                <td>{delivery.driver}</td>
                <td>{delivery.truck}</td>
                <td>{delivery.route}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(delivery.status)}`}>
                    {delivery.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => deleteDelivery(delivery.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeliveryTable;