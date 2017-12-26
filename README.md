# Forum_app

$ docker run --name forum-db -p 27017:27017 -d mongo:3.4 --auth
$ docker exec -it forum-db mongo admin