# Anamnesis 🔮

![Illustration pour Anamnesis](/Anamnesis.svg)

*Artworks par Astral Requin https://www.deviantart.com/astral-requin/art/Flight-of-the-Bird-286419529*

Anamnesis est un monorepo full-stack personnel servant de base de démarrage (template) pour mes projets. Il est construit avec une stack moderne et robuste, pré-configuré avec des outils de qualité de code pour un développement rapide et efficace.

---

## ✨ Stack Technique

Ce projet combine une interface React performante avec un serveur Node.js solide, le tout en TypeScript.

| Catégorie      | Technologie     | Description                                                              |
| :------------- | :-------------- | :----------------------------------------------------------------------- |
| **Frontend** | **React 19** | Pour construire des interfaces utilisateur dynamiques.                   |
|                | **Vite** | Build tool ultra-rapide pour une expérience de développement fluide.     |
|                | **TypeScript** | Pour un code plus sûr et plus maintenable.                               |
|                | **TanStack Query** | Gestion du state serveur, du cache et de la synchronisation des données. |
|                | **React Router** | Pour la gestion des routes côté client.                                  |
|                | **Responsive Design** | Approche "mobile-first" avec une navigation et des composants adaptés.   |
|                | **Composants UI** | Modale, Toasts, et un système de panneau latéral (Overlay) pour desktop. |
|                | **React Icons** | Bibliothèque d'icônes centralisée.                                       |
| **Backend** | **Node.js** | Environnement d'exécution JavaScript côté serveur.                       |
|                | **Express** | Framework minimaliste pour construire l'API REST.                        |
|                | **PostgreSQL** | Système de gestion de base de données relationnelle open-source.         |
|                | **Sequelize & CLI** | ORM puissant avec CLI pour gérer migrations, seeders et modèles.         |
|                | **JWT & Bcrypt** | Pour l'authentification sécurisée par jetons.                            |
| **Tooling** | **Biome** | Linter et formateur tout-en-un pour une qualité de code irréprochable.   |
|                | **Concurrently** | Pour lancer les serveurs client et back-end simultanément.               |
|                | **Environnements** | Configurations pour développement, staging et production.                |
|                | **Commitlint** | Pour s'assurer que les messages de commit suivent un format standard.    |

---

## 👩‍💻 À propos de la créatrice

<img src="./affiche-mucha-printemps.jpg" alt="Avatar de Constance" width="590" style="border-radius: 50%; margin-right: 20px;"/>

Ce template a été conçu et développé par **Camille Céleste Covarel** (Constance-Tlse sur GitHub). Passionnée par le développement web, j'ai créé "Anamnesis" pour accélérer le démarrage de mes projets personnels avec une base solide et moderne.

N'hésitez pas à explorer mes autres projets sur [mon profil GitHub](https://github.com/Constance-Tlse) ou à me contacter.

<br/>

---

## 🚀 Démarrage Rapide

Suivez ces étapes pour lancer le projet en local.

### Prérequis

-   Node.js (v18+ recommandé)
-   Git
-   Une instance de **PostgreSQL** en cours d'exécution.

### Installation

1.  **Clonez le dépôt :**

    ```bash
    git clone git@github.com:Constance-Tlse/Anamnesis.git
    cd Anamnesis
    ```

2.  **Installez toutes les dépendances :** La commande suivante, lancée à la racine, installera les dépendances pour le client et le serveur grâce aux workspaces.

    ```bash
    npm install
    ```

3.  **Configurez les variables d'environnement :** Le projet est structuré pour gérer plusieurs environnements de déploiement (`development`, `staging`, `production`).

    Vite (côté client) et le serveur Node.js peuvent utiliser des fichiers `.env` spécifiques :
    -   `.env` ou `.env.development` : Pour le développement local.
    -   `.env.staging`: Pour l'environnement de pré-production.
    -   `.env.production`: Pour l'environnement de production.

    Créez les fichiers nécessaires dans les dossiers `client` et `server` en vous basant sur les exemples ci-dessous.

    `server/.env` :

    ```properties
    # Configuration de la base de données (PostgreSQL)
    DB_USER=votre_user_postgres
    DB_PASS=votre_mot_de_passe
    DB_HOST=localhost/xxx.xxx.xxx.xxx
    DB_PORT=XXXX
    DB_NAME=db_name
    DB_DIALECT=postgres

    # Clé secrète pour les jetons JWT (utilisez une chaîne longue et aléatoire)
    JWT_SECRET=votre_super_secret

    # URL du client pour la configuration CORS
    CLIENT_URL=http://localhost:5173
    ```

    `client/.env` :

    ```properties
    # URL de l'API back-end
    VITE_API_URL=http://localhost:3310
    ```

4.  ** Créer votre premier fichier de migration**

    ```bash
    npx sequelize-cli migration:generate --name exemple_name 
    ```

5.  **Mettez en place la base de données :** Cette commande va créer les tables définies par les modèles Sequelize.

    ```bash
    npm run db:migrate
    ```

6.  **Lancez l'application :** Cette commande démarre le serveur back-end et le client front-end en même temps.

    ```bash
    npm run dev
    ```

    * Le client sera accessible sur `http://localhost:3000`.
    * Le serveur sera accessible sur `http://localhost:3310`.

---

## 🚀 Utiliser Anamnesis comme Template

Pour démarrer un nouveau projet basé sur Anamnesis :

1.  **Créez une copie locale :** Clonez le projet dans un nouveau dossier qui portera le nom de votre nouveau projet.

    ```bash
    git clone git@github.com:Constance-Tlse/Anamnesis.git MonNouveauProjet
    cd MonNouveauProjet
    ```

2.  **Réinitialisez l'historique Git :** Ceci supprime l'historique des commits d'Anamnesis pour repartir de zéro.

    ```bash
    rm -rf .git
    git init
    ```

3.  **Liez-le à votre propre dépôt distant :** Créez un nouveau dépôt **VIDE** sur GitHub (ou ailleurs) et liez-le à votre projet local.

    ```bash
    git remote add origin git@github.com:VotrePseudo/MonNouveauProjet.git
    ```

4.  **Personnalisez votre projet :**
    * Ouvrez les 3 fichiers `package.json` (à la racine, dans `client/` et dans `server/`).
    * Modifiez les champs `name`, `author`, `description`, `repository`, etc. pour qu'ils correspondent à votre nouveau projet.
    * **Videz la page d'accueil :** Le fichier `client/src/pages/LandingPage.tsx` contient la présentation du template. Supprimez son contenu pour commencer avec une page propre.

5.  **Suivez le guide d'installation classique :**
    * Installez les dépendances (`npm install`).
    * Créez et configurez vos fichiers `.env` avec les bonnes informations (ports, accès BDD, etc.).
    * Créez votre fichier de migration avec `npx sequelize-cli migration:generate --name exemple_name`.
    * Lancez les migrations (`npm run db:migrate`).
    * Testez que tout fonctionne (`npm run dev`).

6.  **Faites votre premier commit :** Une fois que tout est configuré et fonctionnel, enregistrez cette base saine.

    ```bash
    git add .
    git commit -m "feat: Initial commit from Anamnesis template"
    ```

7.  **Poussez votre premier commit :** Envoyez votre historique local vers le dépôt distant.

    ```bash
    git push -u origin main
    ```

    Votre nouveau projet est prêt !

---

## 📜 Licence

Ce projet est sous licence Apache 2.0. Voir le fichier `LICENSE` pour plus de détails.

## Contributeur 

Login par @Dias-Jonathan-dev