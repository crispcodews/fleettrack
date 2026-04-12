import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Deliveries from './pages/Deliveries';
import  Drivers from './pages/Drivers';
import Fleet from './pages/Fleet';
import Analytics from './pages/Analytics';
import './App.css';

function App() {
  const [deliveries, setDeliveries] = useState([
    { id: 1, driver: "Sarah Lee", truck: "T-104", route: "Dallas → LA", status: "In Transit"},
    { id: 2, driver: "Mike Chen", truck: "T-221", route: "NY → Boston", status: "Delivered"},
    { id: 3, driver: "Carlos Diaz", truck: "T-332", route: "Houston → Miami", status: "Delated"},
  ]);

  return (
    <BrowserRouter>
      <div style={{ display: "flex"}}>
        <Sidebar /> 
        <div style={{ flex: 1, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
          <Routes> 
            <Route path="/" element={<Dashboard deliveries={deliveries} setDeliveries={setDeliveries} />} />
            <Route path="/deliveries" element={<Deliveries />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/analytics" element={<Analytics deliveries={deliveries} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;