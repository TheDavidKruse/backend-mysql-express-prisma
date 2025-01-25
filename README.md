Write up:

To start the application you must have [Docker](https://docs.docker.com/engine/install/)!

create a .env file with the url to the preferred mysql database. In the case of the docker compose default it should be `DATABASE_URL="mysql://root@db:8080/mydb"`

With running

`docker compose up` while in the repo will run two docker containers. One for the database and one for the backend.
