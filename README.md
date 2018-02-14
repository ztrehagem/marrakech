# Running local server

1. Install **Docker**.
- `$ make` to run containers.
- Wait for `web_1    | ✨  Built in ???s.`
- `$ make serve` to start local server.
- http://localhost:8080
- `$ make down` to close containes.


- If server scripts are modified, re-exec `make serve` is necessary.


# Developing client application

1. Install **Node.js**.
- `$ make watch` after running local server.
- Then, hot module replacement is available.
