import '../styles/StatsCard.css';

function StatsCard({ title, value, icon, color }) {
    return (
        <div style={{ 
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            minWidth: "200px",
            flex: 1,
            display: "flex",
            alignItems: "center",
            gap: "16px",
        }}>
            <div style={{ 
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: color + "20",
                display: "flex",
                alignItems: "center",
                fontSize: "28px",
                flexShrink: 0,
            }}>
                {icon}
            </div>
            <div>
                <h3 style={{ margin: 0, color: "#6b7280", fontSize: "0.9rem" }}>{title}</h3>
                <h1 style={{ margin: "4px 0 0 0", color: color, fontSize: "2rem" }}>{value}</h1>
            </div>
        </div>
    );
}

export default StatsCard;