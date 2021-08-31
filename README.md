# Login-Auth ServerSide

## `So how it works?`
The server is using Node.Js and MongoDB as database.
Getting requests from the Client side, validates the data, than using rest api such as:
a.login controller - checking if the user exists in the db, if he is, return a token.
b.register - encrypting the password, adding the new user to the db.
c.logout - based on the token saved in the localstorage, if(token), remove the token, if(!token), asks to log in first.

## `tecnologies`
Node.Js

## `libraries`
express.js, express-validator, morgan, nodemon, bcrypt, mongoose, jwt

## `special things`
Jwt implementation, password encryption.

# 'note' 
When moving between branches in this project you may encounter 404 from GitHub, just refresh the page the rest is there :)
