FROM --platform=amd64 node:17-alpine
FROM --platform=arm64 arm64v8/node:17-alpine

WORKDIR /app
COPY package*.json .
RUN npm i

COPY . .

RUN npm run build

ENTRYPOINT [ "npm", "run", "start-no-build" ]