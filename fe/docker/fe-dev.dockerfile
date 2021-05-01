FROM node:lts-alpine

WORKDIR /app

# append node_modules to PATH
ENV PATH /app/fe/node_modules/.bin:$PATH

WORKDIR /app/fe
CMD npm run dev || npm ci && npm run dev
