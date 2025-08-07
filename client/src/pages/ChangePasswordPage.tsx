import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useToastStore } from "../utils/useToast";
import "../stylesheets/pages/ChangePasswordPage.css";

interface ChangePasswordData {
  oldPassword?: string;
  newPassword?: string;
}

const changePasswordRequest = async (passwords: ChangePasswordData) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/users/me/password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(passwords),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Échec de la mise à jour.");
  }

  return data;
};

function ChangePasswordPage() {
  const { addToast } = useToastStore();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const mutation = useMutation({
    mutationFn: changePasswordRequest,
    onSuccess: () => {
      addToast("Mot de passe mis à jour avec succès !", "success");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setError("");
    },
    onError: (err: Error) => {
      setError(err.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword.length < 6) {
      setError("Le nouveau mot de passe doit faire au moins 6 caractères.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }

    mutation.mutate({ oldPassword, newPassword });
  };

  return (
    <div className="change-password-container">
      <h2>Changer mon mot de passe</h2>
      <p>
        Pour votre sécurité, choisissez un mot de passe que vous n'utilisez pas
        déjà ailleurs.
      </p>
      <form onSubmit={handleSubmit} className="change-password-form">
        <div className="form-group">
          <label htmlFor="oldPassword">Ancien mot de passe</label>
          <input
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">
            Confirmer le nouveau mot de passe
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button
          type="submit"
          className="cta-button primary"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Mise à jour..." : "Mettre à jour"}
        </button>
      </form>
    </div>
  );
}

export default ChangePasswordPage;
