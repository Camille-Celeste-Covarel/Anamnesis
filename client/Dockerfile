# ---- Étape 1: Build de l'application React ----
# On utilise une image Node.js spécifique et légère pour la reproductibilité.
FROM node:24-alpine AS builder

WORKDIR /app

# --- Optimisation du cache Docker ---
# On copie d'abord les fichiers qui définissent les dépendances du monorepo.
# Cette étape ne sera relancée que si les dépendances changent.
COPY package.json package-lock.json ./
COPY client/package.json ./client/
COPY server/package.json ./server/

# On installe TOUTES les dépendances du monorepo avec 'npm ci'.
# C'est la méthode la plus fiable et rapide pour la CI.
# Elle ne lance pas le script "prepare" (husky), ce qui résout votre erreur.
RUN npm ci

# Maintenant que les dépendances sont installées, on copie TOUT le code source.
# C'est crucial car votre client a besoin des types partagés du serveur pour compiler.
COPY . .

# On lance le build pour le client.
RUN npm run build --workspace=@anamnesis/client


# ---- Étape 2: Service de l'application avec Nginx ----
# On utilise une image Nginx très légère pour servir nos fichiers statiques.
FROM nginx:stable-alpine

# On copie la configuration Nginx depuis le dossier client
# On copie une configuration Nginx personnalisée pour bien gérer le routing de React.
COPY client/nginx.conf /etc/nginx/conf.d/default.conf

# On copie les fichiers buildés depuis l'étape "builder".
# Le chemin de sortie de Vite est 'client/dist'.
COPY --from=builder /app/client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]