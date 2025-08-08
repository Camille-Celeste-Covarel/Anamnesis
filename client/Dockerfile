FROM node:24-alpine AS build-base

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY client/package.json ./client/


RUN npm install --workspace=client

COPY client/ ./client/

RUN npm run build --workspace=client

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-base /app/client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]