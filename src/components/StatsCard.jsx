import '../styles/StatsCard.css';

function StatsCard({ title, value, icon, color }) {
    return (
        <div className="stat-card">
            <div className="stat-card-icon" style={{ background: color + "20" }}>
                {icon}
            </div>
            <div>
                <h3 className="stat-card-title">{title}</h3>
                <h1 className="stat-card-value" style={{ color: color}}>{value}</h1>
            </div>
        </div>
    );
}

export default StatsCard;