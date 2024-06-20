#for dev
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./

RUN npm install -g @angular/cli

COPY . .
#RUN npm install -g npm@10.8.0
RUN npm install --legacy-peer-deps
RUN npm run build

EXPOSE 4200
#CMD ["npm", "start"]
ENTRYPOINT npm start
#CMD ng serve --host 0.0.0.0

#for prod
#FROM node:18-alpine AS build
#WORKDIR /app

#COPY . .
#RUN npm install -g @angular/cli
#RUN npm install --legacy-peer-deps
#RUN npm install -g npm@10.8.0
#RUN npm run build

# Serve Application using Nginx Server
#FROM nginx:alpine
#COPY --from=build /app/dist/meeting-room-manager-frontend/ /usr/share/nginx/html
#EXPOSE 8083