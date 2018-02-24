# Running local server

1. Install **Docker**.
1. `$ make` to run containers.
1. Wait for `web_1    | ✨  Built in ???s.`
1. `$ make serve` to start local server.
1. http://localhost:8080
1. `$ make down` to close containes.


- If server scripts are modified, re-exec `make serve` is necessary.


# Developing client application

1. Install **Node.js** v9.5.
1. `$ npm install` to download dependent modules.
1. `$ npm run watch` to build assets and watch src files.
1. http://localhost:8080
