import type React from "react";
import { useState } from "react";
import "../stylesheets/pages/forgotpassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const [confirmationEmail, setConfirmationEmail] = useState<string>("");
  const [infoMessage, setInfoMessage] = useState<string>("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInfoMessage("");
    setIsError(false);
    setIsLoading(true);

    if (confirmationEmail !== email) {
      setInfoMessage("Les adresses mail ne correspondent pas.");
      setIsError(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );

      if (!response.ok) {
        setIsError(true);
        setInfoMessage(
          "Le service est momentanément indisponible. Veuillez réessayer plus tard.",
        );
      } else {
        setIsError(false);
        setInfoMessage(
          "Si un compte est associé à cette adresse, un e-mail de réinitialisation a été envoyé.",
        );
        setEmail("");
        setConfirmationEmail("");
      }
    } catch (error) {
      setIsError(true);
      if (error instanceof Error) {
        setInfoMessage(
          "Erreur de connexion. Veuillez vérifier votre réseau et réessayer.",
        );
      } else {
        setInfoMessage("Une erreur inattendue est survenue.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>
        Mot de passe oublié ? <br /> Pas de panique !
      </h2>
      <p>
        Renseignez les champs ci-dessous, vous recevrez par mail un lien vous
        permettant de réinitialiser votre mot de passe.
      </p>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <label htmlFor="email">Adresse mail</label>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Tapez votre adresse mail"
            disabled={isLoading}
          />
        </div>
        <label htmlFor="confirmation-email">Confirmation adresse mail</label>
        <div>
          <input
            type="email"
            id="confirmation-email"
            value={confirmationEmail}
            onChange={(e) => setConfirmationEmail(e.target.value)}
            required
            placeholder="Veuillez confirmer votre mail"
            disabled={isLoading}
          />
        </div>
        <button type="submit" className="button-classic" disabled={isLoading}>
          {isLoading ? "Envoi en cours..." : "Réinitialiser le mot de passe"}
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

export default ForgotPassword;
