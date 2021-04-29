FROM node:lts-alpine

WORKDIR /app

# append node_modules to PATH
ENV PATH /app/node_modules/.bin:$PATH

# install dependencies
COPY .env.example ./
COPY .env ./
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# copy project files
COPY public/ ./public/
COPY src/ ./src/

CMD npm run dev
