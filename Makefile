default: up

up-build:
	docker-compose up --build &
up:
	docker-compose up &
down:
	docker-compose down
serve:
	docker-compose exec web npm run server
rm:
	docker-compose rm -f
ps:
	docker-compose ps
bash:
	docker-compose exec web bash

install:
	npm install
build:
	npm run build
watch:
	npm run watch
clean:
	npm run clean

deploy: install clean build
	heroku container:push web
open:
	heroku open
