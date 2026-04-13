import { useState } from "react";
import "../styles/DeliveryTable.css";

function DeliveryTable({ deliveries, setDeliveries }) {
  // Tracks the next unique ID to assign to a new delivery
  const [nextId, setNextId] = useState(4);

  // Controlled input state for the "Add Delivery form fields"
  const [driver, setDriver] = useState("");
  const [truck, setTruck] = useState("");
  const [route, setRoute] = useState("");
  const [status, setStatus] = useState("In Transit");

  // Search term used to filter the delivery table rows
  const [search, setSearch] = useState("");

  // Tracks which column is being sorted and in which direction
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  /* Validates form inputs and adds a new delivery to the list.
     Resets all form fields after succesful add. 
   */
  function addDelivery() {
    if (!driver || !truck || !route) {
      alert("Please fill in all fields");
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

    // Reset form field to their default values
    setDriver("");
    setTruck("");
    setRoute("");
    setStatus("In Transit");
  }
  /* Removes a delivery from the list by its ID.
    @param {number} idToDelete - The ID of the delivery to remove
     */
  function deleteDelivery(idToDelete) {
    setDeliveries(deliveries.filter((delivery) => delivery.id !== idToDelete));
  }

  /* Handles column header clicks to sort the table.
  Toggles between ascending and descending if the same column is clicked again.
  @param {string} field - The delivery property to sort by (e.g., "driver, status") 
  */
  function handleSort(field) {
    if (sortField === field) {
      // Same column clicked - toggle sort direction
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // New column clicked - sort ascending by default
      setSortField(field);
      setSortOrder("asc");
    }
  }

  /* Returns the appropriate CSS class for a ststus badge.
  @param {string} status - The delivery status ("Delivered", "Delayed", In Transit)
  @returns {string} CSS class name
   */
  function getStatusClass(status) {
    if (status === "Delivered") return "status-delivered";
    if (status === "Delayed") return "status-delayed";
    return "status-transit"; //Default "In Transit"
  }

  return (
    <div className="delivery-table-container">
      <h2>Active Deliveries</h2>

      {/* Form for adding a new delivery entry */}
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

        {/* Status dropdown - defaults to "In Transit" */}
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>In Transit</option>
          <option>Delivered</option>
          <option>Delayed</option>
        </select>

        <button onClick={addDelivery}>Add Delivery</button>
      </div>

      {/* Search bar - filters rows by driver, truck, or route */}
      <input
        type="text"
        placeholder="Search driver, truck, or route"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <table className="delivery-table">
        {/* Clickable column headers trigger sorting */}
        <thead>
          <tr>
            <th onClick={() => handleSort("driver")}>
              Driver{" "}
              {sortField === "driver" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th onClick={() => handleSort("truck")}>
              Truck {sortField === "truck" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th onClick={() => handleSort("route")}>
              Route {sortField === "route" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th onClick={() => handleSort("status")}>
              Status{" "}
              {sortField === "status" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {deliveries
            // Filter rows based on the search term
            .filter((delivery) => {
              if (!search) return true;
              const term = search.toLowerCase();
              return (
                delivery.driver.toLowerCase().includes(term) ||
                delivery.truck.toLowerCase().includes(term) ||
                delivery.route.toLowerCase().includes(term)
              );
            })
            // Sort the filtered rows by the selected column
            .sort((a, b) => {
              if (!sortField) return 0;
              const aValue = a[sortField].toLowerCase();
              const bValue = b[sortField].toLowerCase();
              if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
              if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
              return 0;
            })
            // Render each delivery as a table row
            .map((delivery) => (
              <tr key={delivery.id}>
                <td>{delivery.driver}</td>
                <td>{delivery.truck}</td>
                <td>{delivery.route}</td>
                <td>
                  {/* Colored badge reflecting the delivery's current status */}
                  <span
                    className={`status-badge ${getStatusClass(
                      delivery.status
                    )}`}
                  >
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
