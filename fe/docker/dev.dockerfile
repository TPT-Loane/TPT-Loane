FROM node:lts-alpine

WORKDIR /app

# append node_modules to PATH
ENV PATH /app/node_modules/.bin:$PATH

# install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
#RUN npm i -g create-react-app \
#    create-react-native-app \
#    react-native-cli

# copy project files
COPY public/ ./public/
COPY src/ ./src/

CMD npm run start
