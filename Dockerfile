FROM node:8.12.0-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]
