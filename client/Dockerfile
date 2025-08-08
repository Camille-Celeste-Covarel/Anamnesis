FROM node:24-alpine AS build-base

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
# On copie les manifestes de TOUS les workspaces pour que npm comprenne la structure du monorepo.
COPY client/package.json ./client/
COPY server/package.json ./server/

# On installe UNIQUEMENT les dépendances (y compris devDependencies) pour le workspace 'client'.
# C'est la commande clé qui résout le problème d'efficacité.
# npm est assez intelligent pour piocher aussi les dépendances partagées nécessaires depuis la racine.
RUN npm install --workspace=@js-monorepo/client

# On ne copie le code source du client qu'après l'installation des dépendances pour optimiser le cache.
COPY client/ ./client/

# On lance le build pour le client.
RUN npm run build --workspace=client

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

# On copie la configuration Nginx depuis le dossier client
COPY client/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-base /app/client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]