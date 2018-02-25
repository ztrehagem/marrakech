default: up

up:
	docker-compose up
down:
	docker-compose down
serve:
	docker-compose exec web npm run server
install:
	docker-compose exec web npm install
assets:
	docker-compose exec web npm run build

prod:
	docker-compose --file docker-compose.prod.yml up --build
prod-down:
	docker-compose --file docker-compose.prod.yml down
