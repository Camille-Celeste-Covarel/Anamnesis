import type React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        paddingTop: "50px",
        textAlign: "center",
        maxWidth: "80vw",
      }}
    >
      <h1>Panneau d'Administration</h1>
      <p>Bienvenue dans l'espace réservé aux administrateurs.</p>
      <hr style={{ margin: "2rem auto", maxWidth: "600px" }} />
    </div>
  );
};

export default AdminDashboard;
