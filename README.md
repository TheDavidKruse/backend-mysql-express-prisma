Write up:

To start the application you must have [Docker](https://docs.docker.com/engine/install/)!

create a .env file with the url to the preferred mysql database. In the case of the docker compose default it should be `DATABASE_URL="mysql://root@db:8080/mydb"`

With running

`docker compose up` while in the repo will run two docker containers. One for the database and one for the backend.

### To-do

[] validate routes
[] add testing for functions and prisma with e2e
[] add customizable colors
[] change mysql to psql as its my preference
[] learn more about prisma as its integration with psql is interesting to me
[] possibly merge with front end application as it's possible to run the whole application with nextjs
