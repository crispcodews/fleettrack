import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const deliveryData = [
    { driver: "Sarah Lee", deliveries: 8 },
    { driver: "Mike Chen", deliveries: 12 },
    { driver: "Carlos Diaz", deliveries: 5 },
    { driver: "Jessica Williams", deliveries: 10 },
    { driver: "David Martinez", deliveries: 3 },
    { driver: "Emily Johnson", deliveries: 9 },
];

const statusData = [
    { name: "Delivered", value: 21 },
    { name: "In Transit", value: 12 },
    { name: "Delayed", value: 5 },
];

const COLORS = ["#22c55e", "#f97316", "#ef4444"];

function Analytics() {
    return (
        <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ marginBottom: "30px" }}>
                <h1 style={{ margin: 0, fontSize: "2rem", color: "#111827" }}>Analytics</h1>
                <p style={{ margin: "5px 0", color: "#6b7280", fontSize: "1.1rem" }}>Delivery performance overview</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                
                <div style={{ background: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ marginTop: 0, color: "#111827" }}>Deliveries by Driver</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={deliveryData}>
                            <XAxis dataKey="driver" tick={{ fontSize: 11 }} />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="deliveries" fill="#f97316" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div style={{ background: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ marginTop: 0, color: "#111827" }}>Delivery Status Breakdown</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={statusData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                                {statusData.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
}

export default Analytics;