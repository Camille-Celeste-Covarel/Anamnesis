import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type ChangeEvent, useState } from "react";
import { isMobile } from "react-device-detect";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useOverlay } from "../contexts/OverlayContext/OverlayContext.tsx";
import { useToastStore } from "../utils/useToast.ts";
import "../stylesheets/pages/ProfilePage.css";
import type { UserProfile } from "../types/pages/PagesTypes.ts";

const fetchUserProfile = async (): Promise<UserProfile> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/me`, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Impossible de récupérer les informations du profil.");
  }
  return response.json();
};

const updateAvatar = async (avatarFile: File) => {
  const formData = new FormData();
  formData.append("avatar", avatarFile);

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/users/me/avatar`,
    {
      method: "PATCH",
      credentials: "include",
      body: formData,
    },
  );
  if (!response.ok) {
    throw new Error("Échec de la mise à jour de l'avatar.");
  }
  return response.json();
};

function ProfilePage() {
  const { user: authUser, logout } = useAuth();
  const queryClient = useQueryClient();
  const { addToast } = useToastStore();
  const { openOverlay } = useOverlay();
  const navigate = useNavigate();

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const {
    data: user,
    isLoading,
    error,
  } = useQuery<UserProfile>({
    queryKey: ["userProfile", authUser?.id],
    queryFn: fetchUserProfile,
    enabled: !!authUser,
  });

  const avatarMutation = useMutation({
    mutationFn: updateAvatar,
    onSuccess: () => {
      addToast("Avatar mis à jour avec succès !", "success");
      void queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      void queryClient.invalidateQueries({ queryKey: ["auth-user"] }); // Pour màj l'avatar du header
      setAvatarFile(null);
      setAvatarPreview(null);
    },
    onError: (error: Error) => {
      addToast(error.message, "error");
    },
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleAvatarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!avatarFile) return;
    avatarMutation.mutate(avatarFile);
  };

  const handleChangePasswordClick = () => {
    if (isMobile) {
      navigate("/change-password");
    } else {
      openOverlay("#change-password");
    }
  };

  if (isLoading) {
    return <div className="profil-container">Chargement du profil...</div>;
  }

  if (error) {
    return (
      <div className="profil-container">
        Erreur lors du chargement du profil.
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="profil-container">
      <div className="profil-header">
        <div className="avatar-display">
          {avatarPreview ? (
            <img
              src={avatarPreview}
              alt="Aperçu du nouvel avatar"
              className="profil-avatar"
            />
          ) : user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt="Avatar de l'utilisateur"
              className="profil-avatar"
            />
          ) : (
            <FaUserCircle className="profil-avatar-default" />
          )}
        </div>
        <div className="profil-names">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="profil-content">
        <div className="profil-section">
          <h3>Gestion de l'avatar</h3>
          <form className="avatar-form" onSubmit={handleAvatarSubmit}>
            <label htmlFor="avatar-upload" className="cta-button secondary">
              Choisir un fichier
            </label>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            {avatarFile && (
              <button
                type="submit"
                className="cta-button primary"
                disabled={avatarMutation.isPending}
              >
                {avatarMutation.isPending ? "Envoi..." : "Enregistrer"}
              </button>
            )}
          </form>
        </div>

        <div className="profil-section">
          <h3>Informations personnelles</h3>
          <div className="profil-infos">
            <p>
              <strong>Date de naissance:</strong>{" "}
              {user.birthdate
                ? new Date(user.birthdate).toLocaleDateString("fr-FR")
                : "Non renseignée"}
            </p>
            <p>
              <strong>Adresse:</strong> {user.address || "Non renseignée"}
            </p>
            <p>
              <strong>Ville:</strong> {user.city || "Non renseignée"},{" "}
              {user.postcode}
            </p>
          </div>
        </div>

        <div className="profil-section">
          <h3>Actions</h3>
          <div className="profil-actions">
            <button
              type="button"
              className="cta-button secondary"
              onClick={handleChangePasswordClick}
            >
              Changer de mot de passe
            </button>
            <button
              type="button"
              className="cta-button danger"
              onClick={logout}
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
