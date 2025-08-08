import {
  FaBell,
  FaGitAlt,
  FaLayerGroup,
  FaMobileAlt,
  FaServer,
  FaShieldAlt,
  FaWindowMaximize,
} from "react-icons/fa";
import {
  SiBiome,
  SiDocker,
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
            <strong>framework full-stack</strong> moderne pour se lancer sans
            s'égarer :)
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
                Un code plus sûr et plus facile à maintenir sur l'ensemble du
                projet, du front-end au back-end.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <SiBiome className="feature-icon" />
              </span>
              <h3>Linter & Formatteur</h3>
              <p>
                Biome assure une qualité de code irréprochable et un style
                uniforme, automatiquement.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <FaGitAlt className="feature-icon" />
              </span>
              <h3>Hooks Git Automatisés</h3>
              <p>
                Husky, lint-staged et commitlint pour garantir des commits
                propres et des messages standardisés.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <FaShieldAlt className="feature-icon" />
              </span>
              <h3>Audit de Sécurité</h3>
              <p>
                Intégré à la pipeline CI/CD, <code>npm audit</code> scanne les
                dépendances à chaque push pour prévenir l'introduction de
                vulnérabilités.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <SiDocker className="feature-icon" />
              </span>
              <h3>CI/CD avec Docker</h3>
              <p>
                Pipeline GitHub Actions qui teste, build une image Docker (React
                + Nginx) et déploie en continu.
              </p>
            </div>
            <div className="feature-card">
              <span className="feature-icon-wrapper">
                <FaServer className="feature-icon" />
              </span>
              <h3>Environnements de tests</h3>
              <p>
                Configurations prêtes pour le développement et le testing avant
                mise en production
              </p>
            </div>
          </div>
        </div>

        <div className="how-it-works-section">
          <h2 className="section-title">Comment ça marche ?</h2>
          <p>
            Anamnesis est conçu comme un <strong>socle de départ</strong> pour
            vos projets full-stack. L'objectif est de vous fournir une base
            saine et pré-configurée pour que vous puissiez vous concentrer
            immédiatement sur la logique de votre application, sans vous perdre
            dans la configuration initiale.
          </p>
          <p>
            Le projet est structuré en <strong>monorepo</strong> : le client
            (React) et le serveur (Node.js) cohabitent, ce qui permet de lancer
            les deux services avec une seule commande (<code>npm run dev</code>
            ), de partager des configurations et de maintenir une qualité de
            code homogène. Pour un guide de démarrage détaillé, consultez le{" "}
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
