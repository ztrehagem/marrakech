default: up-build

up:
	docker-compose up &
up-build:
	docker-compose up --build &
down:
	docker-compose down
re:
	docker-compose restart
rm:
	docker-compose rm -f
ps:
	docker-compose ps
bash:
	docker-compose exec web bash

build:
	npm run build
watch:
	npm run watch
clean:
	npm run clean

deploy:
	heroku container:push web
open:
	heroku open
