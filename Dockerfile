FROM node:16.15-apine

RUN node -v
RUN npm -v

RUN mkdir -p /src/api && chown -R node:node /src/api
WORKDIR /src/api
USER node

COPY package*.json ./

COPY ./ ./

RUN npm i --no-optional



