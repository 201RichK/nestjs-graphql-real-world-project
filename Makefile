# Set PORT to 8080 if not defined in env
PORT ?= 8000

db:
	docker run --name test -p 5432:5432 -e POSTGRES_PASSWORD=root -e POSTGRES_DB=test -d postgres

startDB:
	docker start test

stopDB: 
	docker stop test