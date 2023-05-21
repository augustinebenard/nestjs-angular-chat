# Stage 1: build
FROM node:14 AS development

WORKDIR /usr/frontend/src/app

COPY package*.json ./

RUN npm install

# Install Angular CLI
RUN npm install -g @angular/cli@14

COPY . .

RUN npm run build

EXPOSE 4200
