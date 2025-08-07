import {
  FaBell,
  FaLayerGroup,
  FaMobileAlt,
  FaServer,
  FaWindowMaximize,
} from "react-icons/fa";
import {
  SiBiome,
  SiJsonwebtokens,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import AnamnesisLogo from "../../public/Anamnesis.svg?react";
import avatarImg from "../../public/affiche-mucha-printemps.jpg";
import "../stylesheets/pages/landingpage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="hero-section">
          <AnamnesisLogo className="hero-logo" aria-label="Logo Anamnesis" />
          <p className="subtitle">
            <strong>Anamnesis</strong> est un{" "}
            <strong>framework full-stack</strong> moderne pour se lancer sans s'égarer :)
          </p>
          <div className="cta-buttons">
            <a
              href="https://github.com/Constance-Tlse/Anamnesis"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
            >
              Voir sur GitHub
            </a>
          </div>
        </div>

        <div className="features-section">
          <h2 className="section-title">Une stack complète et cohérente</h2>

          <h3 className="features-subtitle">Un Frontend riche et moderne</h3>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <SiReact className="feature-icon" />
              </span>
              <h3>React & Vite</h3>
              <p>
                Une interface utilisateur réactive et une expérience de
                développement ultra-rapide.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <FaWindowMaximize className="feature-icon" />
              </span>
              <h3>Modale Réutilisable</h3>
              <p>
                Un composant de modale accessible et simple d'utilisation pour
                tous vos besoins de dialogue.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <FaBell className="feature-icon" />
              </span>
              <h3>Notifications Toast</h3>
              <p>
                Un système de notifications "toast" pour fournir un feedback
                clair et non-intrusif à l'utilisateur.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <FaLayerGroup className="feature-icon" />
              </span>
              <h3>Panneau Latéral (Overlay)</h3>
              <p>
                Un panneau latéral dynamique pour les formulaires sur desktop,
                offrant une expérience fluide sans rechargement de page.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <FaMobileAlt className="feature-icon" />
              </span>
              <h3>Adapté au Mobile</h3>
              <p>
                Une interface conçue "mobile-first", avec des composants et une
                navigation qui s'adaptent parfaitement aux écrans mobiles.
              </p>
            </div>
          </div>

          <h3 className="features-subtitle">Un Backend robuste et sécurisé</h3>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <SiNodedotjs className="feature-icon" />
              </span>
              <h3>Backend Node.js & Express</h3>
              <p>
                Un serveur performant et une API RESTful solide pour gérer toute
                votre logique métier.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <SiPostgresql className="feature-icon" />
              </span>
              <h3>PostgreSQL & Sequelize</h3>
              <p>
                Un SGBD puissant et un ORM robuste avec CLI pour gérer
                migrations, seeders et modèles.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <SiJsonwebtokens className="feature-icon" />
              </span>
              <h3>Authentification JWT</h3>
              <p>
                Un système d'authentification par jeton, sécurisé et prêt à
                l'emploi.
              </p>
            </div>
          </div>

          <h3 className="features-subtitle">Déploiement et Qualité de code</h3>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <SiTypescript className="feature-icon" />
              </span>
              <h3>Full TypeScript</h3>
              <p>
                Un code plus sûr, plus lisible et plus facile à maintenir sur
                l'ensemble du projet.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <SiBiome className="feature-icon" />
              </span>
              <h3>Outillage Moderne</h3>
              <p>
                Biome pour la qualité du code, Commitlint pour des commits
                standardisés.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <FaServer className="feature-icon" />
              </span>
              <h3>Environnements Pré-configurés</h3>
              <p>
                Une structure prête pour le déploiement avec des configurations
                pour le développement, le staging et la production.
              </p>
            </div>
          </div>
        </div>

        <div className="how-it-works-section">
          <h2 className="section-title">Comment ça marche ?</h2>
          <p>
            Anamnesis est un <strong>monorepo</strong> : le client (React) et le
            serveur (Node.js) cohabitent dans le même dépôt Git. Cette structure
            centralise le code, simplifie la gestion des dépendances et accélère
            le développement de fonctionnalités complètes.
          </p>
          <p>
            Pour des instructions détaillées sur l'installation et l'utilisation
            de ce template, consultez le{" "}
            <a
              href="https://github.com/Constance-Tlse/Anamnesis/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              README.md
            </a>
            .
          </p>
        </div>

        <div className="creator-section">
          <h2 className="section-title">À propos de la créatrice</h2>
          <div className="creator-content">
            <img
              src={avatarImg}
              alt="Avatar de Constance"
              className="creator-avatar"
            />
            <div className="creator-text">
              <p>
                Ce template est conçu, développé et maintenu par Camille Céleste
                Covarel (Constance-Tlse sur GitHub). Passionnée par le
                développement web, j'ai créé "Anamnesis" pour accélérer le
                démarrage de mes projets et me concentrer sur l'essentiel.
              </p>
              <p>
                N'hésitez pas à explorer mes autres projets ou à me contacter.
              </p>
              <div className="creator-buttons">
                <a
                  href="https://github.com/Constance-Tlse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button secondary"
                >
                  Voir mon profil GitHub
                </a>
                <a
                  href="mailto:votre.email@example.com"
                  className="cta-button primary"
                >
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
