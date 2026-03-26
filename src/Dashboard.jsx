import './Dashboard.css'

const cards = [
  { label: 'Tasks', value: 12, icon: '◈', color: 'purple' },
  { label: 'Completed', value: 8, icon: '✔', color: 'green' },
  { label: 'In Progress', value: 4, icon: '◐', color: 'amber' },
]

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-title-group">
          <span className="dashboard-icon">▦</span>
          <h1 className="dashboard-title">PM Dashboard</h1>
        </div>
        <span className="dashboard-badge">Q2 2026</span>
      </header>

      <div className="cards">
        {cards.map(({ label, value, icon, color }) => (
          <div key={label} className={`card card--${color}`}>
            <div className="card-top">
              <span className="card-label">{label}</span>
              <span className="card-icon">{icon}</span>
            </div>
            <div className="card-value">{value}</div>
            <div className="card-bar">
              <div
                className="card-bar-fill"
                style={{ width: `${(value / 12) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
