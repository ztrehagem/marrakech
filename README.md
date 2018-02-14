# Running local server

1. Install **Docker**.
1. `$ make` to run containers.
1. Wait for `web_1    | ✨  Built in ???s.`
1. `$ make serve` to start local server.
1. http://localhost:8080
1. `$ make down` to close containes.


- If server scripts are modified, re-exec `make serve` is necessary.


# Developing client application

1. Install **Node.js**.
1. `$ make watch` after running local server.
1. Then, hot module replacement is available.
