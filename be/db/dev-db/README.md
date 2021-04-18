# Development database

This folder contains the nessecary files needed to launch a docker instance with
postgresql and example data that can be accessed with a database manager such as
[dbeaver](https://dbeaver.io/)

[dbeaver github](https://github.com/dbeaver/dbeaver)

## Database variables

Host machine port to access database: 5432

User for database: 'postgres'

Pass for database: 'postgres'

## Running the development database in docker

```bash
cd TPT-Loane/be/db/dev-db/       # navigate into this directory
docker-compose up --build -d     # run it in a detached docker container
# <access it with a database manager or similar>
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
