import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ["#22c55e", "#f97316", "#ef4444"];

function Analytics({ deliveries}) {
    
    const statusData = [
        { name: "Delivered", value: deliveries.filter(d => d.status === "Delivered").length},
        { name: "In Transit", value: deliveries.filter(d => d.status === "In Transit").length },
        { name: "Delayed", value: deliveries.filter(d => d.status === "Delayed").length },
    ];

    const driverData = deliveries.reduce((acc, delivery) => {
        const existing = acc.find(item => item.driver === delivery.driver);
        if(existing) {
            existing.deliveries += 1;
        } else {
            acc.push({ driver: delivery.driver, deliveries: 1});
        }
        return acc;
    }, []);
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
                        <BarChart data={driverData}>
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