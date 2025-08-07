import { useState } from "react";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext.tsx";
import { useOverlay } from "../contexts/OverlayContext/OverlayContext.tsx";
import "../stylesheets/pages/loginpage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { openOverlay } = useOverlay();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        login(data.user);
        navigate("/");
      } else {
        setError("Email ou mot de passe incorrect");
      }
    } catch (error) {
      console.error("Erreur: ", error);
      setError("Erreur de connexion");
    }
  };

  const handleForgotPasswordClick = () => {
    if (isMobile) {
      navigate("/forgot-password");
    } else {
      openOverlay("#forgot-password");
    }
  };

  const handleRegisterClick = () => {
    if (isMobile) {
      navigate("/register");
    } else {
      openOverlay("#register");
    }
  };

  return (
    <div className="login-page-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Adresse mail</label>
          <div className="email-input">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Tapez votre adresse mail"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <div className="password-input">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Tapez votre mot de passe"
            />
            <button
              type="button"
              className="login-forgot-password"
              onClick={handleForgotPasswordClick}
            >
              Mot de passe oublié ?
            </button>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="button-classic">
          Se connecter
        </button>

        <div className="separator">
          <h2>Toujours pas de compte ?</h2>
        </div>

        <button
          type="button"
          className="button-classic"
          onClick={handleRegisterClick}
        >
          S'inscrire !
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
