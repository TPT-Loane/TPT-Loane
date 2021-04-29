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

## Docker related

### Important variables

[Front end specific](./fe/README.md#important-variables)

[Back end specific](./be/README.md#important-variables)

[database specific](./be/db/dev-db/README.md#accessing-the-database)

### Running the development services

Running the project in docker:

```bash
docker-compose --profile all up --build -d      # run all configured services.

# connect to localhost:3000 to access the site.
# connect to localhost:8080 to access the database via adminer.
# use localhost:7842 to access the database with a database manager.
```

Read the specific README files for individually running services.

### Stopping the development services

Stopping the project in docker:

```bash
docker-compose down                 # stop the containers (database persists)
rm -rf be/db/dev-db/postgres-data   # destroy any data that persists (simply
                                    # removes the folder)
```

### Troubleshooting

[Front end specific](./fe/README.md#troubleshooting)

[Back end specific](./be/README.md#troubleshooting)

[Database specific](./be/db/dev-db/README.md#troubleshooting)
