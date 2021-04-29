FROM node:lts-alpine

WORKDIR /app

# append node_modules to PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy project files (docker-compose seems ignore '.dockerignore' files.
# If you can make docker-compose ignore folders such as 'node_modules' please
# make a pull request doing that (and replace these copy commands with 'COPY . ./').)
COPY .env.example ./
COPY .env ./
COPY .eslintrc.js ./
COPY .prettierrc ./
COPY nest-cli.json ./
COPY package-lock.json ./
COPY package.json ./
COPY schema.gql ./
COPY src ./src/
COPY test ./test/
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm ci

CMD npm run start:dev
