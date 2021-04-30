FROM node:lts-alpine

WORKDIR /app

# append node_modules to PATH
ENV PATH /app/be/node_modules/.bin:$PATH

WORKDIR /app/be
CMD npm run start:dev || npm ci && npm run start:dev
