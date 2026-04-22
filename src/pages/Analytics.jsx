import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import '../styles/Analytics.css';

const COLORS = ["#22c55e", "#f97316", "#ef4444"];

/*
 * Analytics component
 * Displays two data visualizations summarizing delivery performance:
 * 1. A bar chart showing total deliveries per driver
 * 2. A pie chart breaking down deliveries by status
 */
function Analytics({ deliveries }) {

    /**
     * Aggregates delivery counts by status for the pie chart.
     * Order must match the COLORS array above.
     */
    const statusData = [
        { name: "Delivered",  value: deliveries.filter(d => d.status === "Delivered").length },
        { name: "In Transit", value: deliveries.filter(d => d.status === "In Transit").length },
        { name: "Delayed",    value: deliveries.filter(d => d.status === "Delayed").length },
    ];

    /**
     * Aggregates delivery counts per driver for the bar chart.
     * Uses reduce() to build an array of { driver, deliveries } objects.
     */
    const driverData = deliveries.reduce((acc, delivery) => {
        const existing = acc.find(item => item.driver === delivery.driver);
        if (existing) {
            // Driver already tracked — increment their delivery count
            existing.deliveries += 1;
        } else {
            // First delivery seen for this driver — add a new entry
            acc.push({ driver: delivery.driver, deliveries: 1 });
        }
        return acc;
    }, []);

    return (
        <div className="analytics-container">

            {/* Page header */}
            <div className="analytics-header">
                <h1>Analytics</h1>
                <p>Delivery performance overview</p>
            </div>

            {/* Two-column chart grid — stacks to one column on mobile */}
            <div className="analytics-grid">

                {/* Bar Chart — Deliveries per Driver */}
                <div className="analytics-card">
                    <h2>Deliveries by Driver</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={driverData}>
                            <XAxis dataKey="driver" tick={{ fontSize: 11 }} />
                            <YAxis />
                            <Tooltip />
                            {/* radius rounds the top corners of each bar: [topLeft, topRight, bottomRight, bottomLeft] */}
                            <Bar dataKey="deliveries" fill="#f97316" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart — Delivery Status Breakdown */}
                <div className="analytics-card">
                    <h2>Delivery Status Breakdown</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            {/*
                             * cx/cy centers the pie in the container.
                             * outerRadius controls the pie's size.
                             * label prop enables percentage labels on each slice.
                             */}
                            <Pie
                                data={statusData}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                dataKey="value"
                                label
                            >
                                {/* Map each status entry to a colored Cell using the COLORS array */}
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