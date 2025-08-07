import type React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function ResetPassword() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");
  const [infoMessage, setInfoMessage] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInfoMessage("");
    setIsError(false);
    setIsLoading(true);

    if (confirmationPassword !== password) {
      setIsError(true);
      setInfoMessage("Les mots de passe ne correspondent pas.");
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      setIsError(true);
      setInfoMessage("Le mot de passe doit faire au moins 6 caractères.");
      setIsLoading(false);
      return;
    }
    if (!token) {
      setIsError(true);
      setInfoMessage("Lien invalide ou expiré. Veuillez refaire une demande.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/reset-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, password }),
        },
      );
      const data = await response.json();

      if (!response.ok) {
        setIsError(true);
        setInfoMessage(data.message || "Une erreur est survenue.");
      } else {
        setIsError(false);
        setInfoMessage(data.message);
        setPassword("");
        setConfirmationPassword("");
      }
    } catch (error) {
      setIsError(true);
      if (error instanceof Error) {
        setInfoMessage(error.message);
      } else {
        setInfoMessage(
          "Une erreur réseau inattendue est survenue. Veuillez réessayer.",
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Réinitialisation de votre mot de passe</h2>
      <p>Merci de choisir ci-dessous un nouveau mot de passe</p>
      <form onSubmit={handleSubmit} className="reset-password-form">
        <div>
          <label htmlFor="password">
            Choisissez votre nouveau mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Nouveau mot de passe"
          />
        </div>
        <div>
          <label htmlFor="confirmation-password">
            Confirmez votre nouveau mot de passe
          </label>
          <input
            type="password"
            id="confirmation-password"
            value={confirmationPassword}
            onChange={(e) => setConfirmationPassword(e.target.value)}
            required
            placeholder="Nouveau mot de passe"
            disabled={isLoading}
          />
        </div>
        <button type="submit" className="button-classic" disabled={isLoading}>
          {isLoading ? "Réinitialisation..." : "Réinitialiser le mot de passe"}
        </button>
      </form>
      {infoMessage && (
        <div className={`info-message ${isError ? "error" : "success"}`}>
          {infoMessage}
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
