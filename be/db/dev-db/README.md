# Development database

This folder contains the nessecary files needed to launch a docker instance with
postgresql and example data that can be accessed with a database manager such
as [dbeaver](https://dbeaver.io/)[(github)](https://github.com/dbeaver/dbeaver).

## Table of contents

- [Accessing the database](#accessing-the-database)

- [Running the development database in docker](#running-the-development-database-in-docker)

- [Stopping the development database](#stopping-the-development-database)

- [Adding example data and tables](#adding-example-data-and-tables)

- [Troubleshooting](#troubleshooting)

## Accessing the database

Access the database using adminer at:
'[localhost:8080](http://localhost:8080/?pgsql=db-dev&username=postgres&db=postgres)'.
Make sure to select 'PostgreSQL' from the dropdown menu!

Host machine port to access database: 7842

Server for database: 'db-dev'

User for database: 'postgres'

Pass for database: 'postgres'

database in database: 'postgres'

## Running the development database in docker

```bash
cd ../../../                                                        # navigate into the project root
docker-compose --profile dev-db up --build -d                       # run it in a detached docker container (without adminer)
docker-compose --profile dev-db --profile adminer up --build -d     # run it in a detached docker container (with adminer)

# connect to localhost:8080 to use with adminer or
# access it with a database manager
```

## Stopping the development database

```bash
cd ../../../                        # navigate into the project root
docker-compose down                 # stop the container (data is still persistent)
rm -rf be/db/dev-db/postgres-data   # destroy any data that persists (simply
                                    # removes the folder)
```

## Adding example data and tables

Modify the sql files included in the 'sql' folder. Make sure to remove any
leftover databases from previous dev runs using the command above.

## Troubleshooting

(There are currently no known errors related to running the database.)
