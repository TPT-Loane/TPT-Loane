# Back end

## Important variables

[Found in '.env.example' file.](./.env.example)

Development back end URL (docker): [localhost:3001](http://localhost:3001)

## Running the development back end

Running the back end in docker:

```bash
cd ..                                               # navigate into the project root
docker-compose --profile be-dev up --build -d       # run it in a detached docker container
```

Running the back end locally:

```bash
cd TPT-Loane/be/                    # navigate into this directory
npm i                               # install dependencies

npm run start                       # run development server
npm run start:dev                   # run development server (watch mode)
npm run start:prod                  # run the production server

# connect to localhost:3001 to access back end
```

### Database migrations

```bash
npm run gen-migration <ModelName>   # generate migrations
```

### Tests

```bash
npm run test                        # unit tests
npm run test:e2e                    # e2e tests
npm run test:cov                    # test coverage
```

## Stopping the development back end

Stopping the front end in docker:

```bash
cd ..                               # navigate into the project root
docker-compose down                 # stop the container
```

## Troubleshooting

(There are currently no known errors related to running the back end.)
