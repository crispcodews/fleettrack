import "../styles/StatsCard.css";

/* Displays a single summary statistic with an icon, label, and value.
Used in dashboard-style layouts to highlight key metrics at a glance.
 */
function StatsCard({ title, value, icon, color }) {
  return (
    // Outer card container - white with subtle shadow
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        minWidth: "200px",
        flex: 1, // Allows card to grom/shrink in a flex row
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      {/* Icon badge - circular container with a tinted background. */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "12px",
          background: color + "20", // Appends to hex color translucent tint
          display: "flex",
          alignItems: "center",
          fontSize: "28px",
          flexShrink: 0, // Prevents the icon from shrinking on small screens
        }}
      >
        {icon}
      </div>

      {/* Stat text - label on top, value below in the prop color */}
      <div>
        <h3 style={{ margin: 0, color: "#6b7280", fontSize: "0.9rem" }}>
          {title}
        </h3>
        <h1 style={{ margin: "4px 0 0 0", color: color, fontSize: "2rem" }}>
          {value}
        </h1>
      </div>
    </div>
  );
}

export default StatsCard;
