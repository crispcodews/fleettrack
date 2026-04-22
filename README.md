# 🚛 FleetTrack — Trucking Logistics Dashboard

A React-based fleet management dashboard for tracking trucks, drivers, and deliveries in real time.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages](#pages)
- [Components](#components)
- [Key Concepts Used](#key-concepts-used)
- [Future Improvements](#future-improvements)

---

## Overview

FleetTrack is a frontend logistics dashboard built with React and React Router. It allows fleet managers to monitor active deliveries, manage drivers, track vehicle status, and view analytics — all from a single interface.

---

## Features

- Dashboard with live stat cards showing total trucks, active deliveries, drivers on duty, and maintenance alerts
- Delivery table with add, delete, search, and sort functionality
- Driver management with searchable table, status filtering, and add driver form
- Fleet page showing vehicle cards with status and maintenance info
- Analytics page with bar and pie charts powered by Recharts
- Sidebar navigation with active route highlighting
- Responsive layout that adapts to different screen sizes

---

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx         # Navigation sidebar with route links
│   ├── Sidebar.css
│   ├── StatsCard.jsx       # Reusable stat card with icon and color props
│   └── StatsCard.css
├── pages/
│   ├── Dashboard.jsx       # Main dashboard with stats and delivery table
│   ├── Dashboard.css
│   ├── Deliveries.jsx      # Deliveries page (placeholder)
│   ├── Drivers.jsx         # Driver management page
│   ├── Drivers.css
│   ├── Fleet.jsx           # Fleet vehicle card grid
│   ├── Fleet.css
│   └── Analytics.jsx       # Charts and performance overview
├── styles/
│   └── DeliveryTable.css   # Styles for the delivery table component
├── App.jsx                 # Root component with routing and shared state
└── App.css
```

---

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fleettrack.git
```

2. Navigate into the project folder:
```bash
cd fleettrack
```

3. Install dependencies:
```bash
npm install
```

4. Install Recharts for the Analytics page:
```bash
npm install recharts
```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and go to:
```
http://localhost:5173
```

---

## Pages

### Dashboard (`/`)
The main overview page. Displays four stat cards at the top showing key metrics. Below that is the delivery table where you can add new deliveries, search, sort by column, and delete entries. Delivery data is stored at the App level and shared with the Analytics page so charts always reflect real data.

### Deliveries (`/deliveries`)
Placeholder page — planned for a full delivery history view with filtering by date and status.

### Drivers (`/drivers`)
Full driver management page. Includes a search bar, status summary stats, and a table of all drivers. The "+ Add Driver" button reveals an inline form to add a new driver. Clicking "View" on any row shows a details panel below the table with that driver's full information.

### Fleet (`/fleet`)
Displays all trucks as individual cards in a responsive grid. Each card shows the truck ID, current status (Active / In Service / PTO), assigned driver, and last maintenance date. A stats strip at the top summarizes fleet status counts.

### Analytics (`/analytics`)
Two charts powered by Recharts. The bar chart shows number of deliveries per driver, and the pie chart shows the breakdown of delivery statuses (Delivered, In Transit, Delayed). Both charts use real delivery data passed down from App state, so they update automatically when deliveries are added or removed on the Dashboard.

---

## Components

### `Sidebar`
Renders the left navigation menu using React Router's `Link` and `useLocation`. The active route is highlighted with an orange background using the `isActive()` helper function.

### `StatsCard`
A reusable card component that accepts four props:
- `title` — the label shown above the number
- `value` — the number displayed
- `icon` — an emoji icon shown on the left
- `color` — a hex color used for the icon background and number text

### `DeliveryTable`
Manages the add, delete, search, and sort functionality for deliveries. Receives `deliveries` and `setDeliveries` as props from Dashboard since delivery state is lifted up to App level. Each delivery has a unique `id` to ensure deleting works correctly even after sorting or searching.

---

## Key Concepts Used

**useState** — used throughout to manage local component state such as form inputs, search terms, sort fields, and toggle visibility of forms and panels.

**Props** — data and functions are passed between components using props. For example, `deliveries` and `setDeliveries` are passed from App down to Dashboard and Analytics.

**Lifting State Up** — delivery data lives in `App.jsx` so it can be shared between the Dashboard (which displays and edits it) and Analytics (which visualizes it). This keeps the data in sync across pages.

**Conditional Rendering** — the add driver form and driver details panel are shown and hidden using the `{condition && <Component />}` pattern. This is a core React pattern for toggling UI elements.

**Array Methods** — `.filter()` is used for search and status filtering, `.sort()` for column sorting, `.map()` for rendering lists, and `.reduce()` for grouping deliveries by driver in the Analytics chart.

**Unique IDs** — every delivery and driver has a unique `id` field. Delete operations use these IDs instead of array indexes to avoid removing the wrong item after sorting or filtering.

**React Router** — client-side routing is handled with `BrowserRouter`, `Routes`, `Route`, `Link`, and `useLocation` from the `react-router-dom` library.

**Recharts** — the Analytics page uses `BarChart`, `PieChart`, `ResponsiveContainer`, `Cell`, `Tooltip`, and `Legend` components from the Recharts library to render interactive charts.

---

## Future Improvements

- Connect to a real backend (Node.js + Express) and database (MongoDB or PostgreSQL) so data persists across sessions
- Add edit functionality to the Drivers table so driver status and info can be updated
- Build out the Deliveries page with full history, date filtering, and pagination
- Add delete functionality to the Drivers and Fleet pages
- Improve mobile responsiveness with dedicated media queries
- Add user authentication so different managers can log in
- Replace hardcoded truck and driver counts on the Dashboard with real calculated values

---

## Built With

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Recharts](https://recharts.org/)
- [Vite](https://vitejs.dev/)
