default: restart

restart: down up
up:
	docker-compose up --build &
down:
	docker-compose down
rm:
	docker-compose rm -f
bash:
	docker-compose exec web bash

deploy:
	heroku container:push web
open:
	heroku open
