import { useState } from "react";

const AdminDashboard = () => {
  const tabs = [{ id: "example", label: "Example" }];

  // On utilise un état pour savoir quel onglet est actif.
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="admin-dashboard-container">
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>Panneau d'Administration</h1>
        <p>Bienvenue dans l'espace réservé aux administrateurs.</p>
      </div>

      <nav className="admin-tab-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AdminDashboard;
