FROM node:24-alpine AS build-base

WORKDIR /app

COPY client/package.json ./client/
COPY client/package-lock.json ./client/

WORKDIR /app/client
RUN npm install

WORKDIR /app
COPY client/ ./client/

WORKDIR /app/client
RUN npm run build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-base /app/client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]