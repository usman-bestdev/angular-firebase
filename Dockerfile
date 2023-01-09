#FROM node: 18.10-alpine
FROM node:18.10-alpine
RUN npm install -g npm@9.2.0
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 4200
CMD npm run docker
