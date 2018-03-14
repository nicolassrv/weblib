# Weblib test technique

## Installation
npm install
cp .env.exemple .env

#configuration
Database db config into the .env file
And run "node server"

# Documentation
You can access to the Swagger documentation at "/api-docs"
a Postman collection "postman.json" is available in the root

#get Started
Firt you have to create a user with a email and a password
with the following endpoint [POST] "/users"

Then you can login with the endpoint [POST] "/login" for receive a token
Foreach call, you have to set the token in the header field "x-access-token"
If you use the postman collection the token is set automatically.