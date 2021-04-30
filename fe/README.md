# Front end

This folder contains all the files related to creating a front end for the
project.

The front end is made with React, Chakra UI and Sass.

## Table of contents

- [Important variables](#important-variables)

- [Running the development front end](#running-the-development-front-end)

- [Stopping the development front end](#stopping-the-development-front-end)

- [Troubleshooting](#troubleshooting)

## Important variables

[Found in '.env.example' file.](./.env.example)

Development front end URL (docker): [localhost:3000](http://localhost:3000)

## Running the development front end

Running the front end in docker:

```bash
cd ..                                               # navigate into the project root
docker-compose --profile www-dev up --build -d      # run it in a detached docker container

# connect to localhost:3000 to access the site
```

Running the front end locally:

```bash
cd TPT-Loane/fe/                    # navigate into this directory
npm i                               # install dependencies
npm run dev                         # run development server

# connect to localhost:3000 to access the site
```

## Stopping the development front end

Stopping the front end in docker:

```bash
cd ..                               # navigate into the project root
docker-compose down                 # stop the container
```

## Troubleshooting

(There are currently no known errors related to running the front end.)
