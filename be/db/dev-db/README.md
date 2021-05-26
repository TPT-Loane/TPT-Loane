# Development database

This folder contains the nessecary files needed to launch a docker instance with
postgresql that can be accessed with a database manager such as
[dbeaver](https://dbeaver.io/) [(github)](https://github.com/dbeaver/dbeaver).

## Accessing the database

Access the database using adminer at:
'[localhost:8080](http://localhost:8080/?pgsql=db-dev&username=postgres&db=postgres)'.
Make sure to select 'PostgreSQL' from the dropdown menu!

Host machine port to access database: 7842

Server for database: 'db-dev'

User for database: 'postgres'

Pass for database: 'postgres'

Database in database: 'postgres'

## Running the development database in docker

```bash
cd ../../../                                                        # navigate into the project root
docker-compose --profile dev-db up --build -d                       # run it in a detached docker container (without adminer)
docker-compose --profile dev-db --profile adminer up --build -d     # run it in a detached docker container (with adminer)

# connect to localhost:8080 to use with adminer or access it with a database manager from localhost:7842
```

## Stopping the development database

```bash
cd ../../../                        # navigate into the project root
docker-compose down                 # stop the container (data is still persistent)
rm -rf docker/volumes/postgres-data # destroy any data that persists (simply removes the folder)
```

## Adding example data and tables

The database gets initialized with data from the back end automagically. These
are the instructions for how to do it semi-manually:

```bash
### Native
### Make sure that the back end and database are running!

cd ../../                           # navigate to the back end folder
npm run gen-migration <ModelName>   # generate migrations

### Docker
### Make sure that 'db-dev' and 'be-dev' containers are running!

docker exec tpt-loane_be-dev_1 npm run gen-migration <ModelName>    # generate migrations (docker)
```

## Troubleshooting

(There are currently no known errors related to running the database.)
