# Forum_app

This is the backend for a forum app where users are able to post topics and leave messages.

# Set up and run
It is required to set up and run the instance of MongoDb running in docker first

$ npm install (Node version required >= 7.0.0)
$ npm start



# Set up and run MongoDb on docker 
Docker version 17.06
$ docker run --name forum-db -p 27017:27017 -d mongo:3.4

# Set up and run Interface

$ git clone https://github.com/dynk/forum-web.git
$ npm install
$ npm start