default: up

re:
	docker-compose restart
up:
	docker-compose up &
down:
	docker-compose down
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
