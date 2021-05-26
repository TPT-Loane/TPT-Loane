# Front end

This folder contains all the files related to creating a front end for the
project.

The front end is made with React, Chakra UI and Sass.

## Important variables

[Found in '.env.example' file.](./.env.example)

Development front end URL (docker): [localhost:3000](http://localhost:3000)

## Running the development front end

Running the front end in docker:

```bash
cd ..                                               # navigate into the project root
docker-compose --profile www-dev up --build -d      # run it in a detached docker container

# connect to localhost:3000 to access front end
```

Running the front end locally:

```bash
cd TPT-Loane/fe/                    # navigate into this directory
npm i                               # install dependencies
npm run dev                         # run development server

# connect to localhost:3000 to access front end
```

## Stopping the development front end

Stopping the front end in docker:

```bash
cd ..                               # navigate into the project root
docker-compose down                 # stop the container
```

## Troubleshooting

(There are currently no known errors related to running the front end.)

## Icons

you can use Chakra Icons or Font Awesome icons.

To use Font Awesome icons:

add the icon you want to use to library in App.tsx

```jsx
library.add(faCoffee);
```

then in your component import

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
```

use Like this (if far doesn't work use fas):
Regular:

```jsx
<FontAwesomeIcon icon={['far', 'coffee']} />
```

Solid:

```jsx
<FontAwesomeIcon icon={['fas', 'coffee']} />
```

fas(font awesome solid)
fas(font awesome regular

You can find new icons [here](https://fontawesome.com/icons?d=gallery&p=2&m=free)

Chakra Is easier, but there aren't many icons there:
[chakra](https://chakra-ui.com/docs/media-and-icons/icon)
