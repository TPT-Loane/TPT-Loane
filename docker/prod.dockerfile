FROM node:lts-alpine

WORKDIR /app

# append node_modules to PATH
ENV PATH /app/be/node_modules/.bin:$PATH
ENV PATH /app/fe/node_modules/.bin:$PATH

# serve application
CMD cd /app/fe && \
    npm ci && \
    npm run build && \
    cd /app/be && \
    npm ci && \
    npm run build && \
    node /app/be/dist/src/main.js
