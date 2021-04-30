# TPT-Loane

Loan and borrow!

## Quick links

- [Front end](./fe/)

- [Back end](./be/)

- [Database](./be/db/)

## Table of contents

- [Docker related](#docker-related)

  - [Important variables](#important-variables)

  - [Running the development services](#running-the-development-services)

  - [Stopping the development services](#stopping-the-development-services)

- [Troubleshooting](#troubleshooting)

  - [Front end specific](./fe/README.md#troubleshooting)

  - [Back end specific](./be/README.md#troubleshooting)

  - [Database specific](./be/db/dev-db/README.md#troubleshooting)

  - [Docker not running](#docker-not-running)

## Docker related

### Important variables

[Front end specific](./fe/README.md#important-variables)

[Back end specific](./be/README.md#important-variables)

[database specific](./be/db/dev-db/README.md#accessing-the-database)

### Running the development services

Running the project in docker:

```bash
docker-compose --profile all up --build -d      # run all configured services.

# connect to localhost:3000 to access front end.
# connect to localhost:3001 to access back end.
# connect to localhost:8080 to access the database via adminer.
# use localhost:7842 to access the database with a database manager.
```

Read the specific README files for individually running services.

### Stopping the development services

Stopping the project in docker:

```bash
docker-compose down                 # stop the containers (database persists)
rm -rf docker/volumes/postgres-data # destroy any data that persists (simply
                                    # removes the folder)
```

## Troubleshooting

[Front end specific](./fe/README.md#troubleshooting)

[Back end specific](./be/README.md#troubleshooting)

[Database specific](./be/db/dev-db/README.md#troubleshooting)

### Docker not running

If you get error (on windows)...

```bash
docker.errors.DockerException: Error while fetching server API version: (2, 'CreateFile', 'The system cannot find the file specified.')
```

...then your docker engine isn't running
