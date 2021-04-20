# Development database

This folder contains the nessecary files needed to launch a docker instance with
postgresql and example data that can be accessed with a database manager such
as:

[dbeaver](https://dbeaver.io/)

[dbeaver github](https://github.com/dbeaver/dbeaver)

## Accessing the database

Access the database using adminer at: 'localhost:8080'. Make sure to select
'postgreSQL' from the dropdown menu!

Host machine port to access database: 7842

User for database: 'postgres'

Pass for database: 'postgres'

database in database: 'postgres'

## Running the development database in docker

```bash
cd TPT-Loane/be/db/dev-db/                          # navigate into this directory
docker-compose up --build -d                        # run it in a detached docker container (without adminer)
docker-compose --profile adminer up --build -d      # run it in a detached docker container (with adminer)

# connect to localhost:8080 to use with adminer or
# access it with a database manager
```

## Stopping the development database

```bash
cd TPT-Loane/be/db/dev-db/       # navigate into this directory
docker-compose down              # stop the container (data is still persistent)
rm -rf postgres-data             # destroy any data that persists (simply
                                 # removes the folder)
```

## Adding example data and tables

Modify the sql files included in the 'sql' folder. Make sure to remove any
leftover databases from previous dev runs using the command above.

## Troubleshooting
If you get error (on windows)...

```bash
docker.errors.DockerException: Error while fetching server API version: (2, 'CreateFile', 'The system cannot find the file specified.')
```

...then your docker engine isn't running
