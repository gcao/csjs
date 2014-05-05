# CoffeeScript <=> JavaScript

## Introduction

## Routes

GET  /           provide a CS <=> CS converter

GET  /cs2js.html provide a form to upload and compile CoffeeScript file  
POST /cs2js      handle form submission and return output

GET  /js2cs.html provide a form to upload and convert JavaScript to CoffeeScript  
POST /js2cs      handle form submission and return output

## Misc

To start the local server:  
mimosa watch -s

To rebuild the distribution:  
mimosa clean && mimosa build

open http://localhost:8000

### Test functionality from command line

See https://ariejan.net/2010/06/07/uploading-files-with-curl/  
curl -i -F file=@test/fixtures/example.coffee http://localhost:8000/cs2js  
curl -i -F file=@test/fixtures/bad.coffee http://localhost:8000/cs2js

### Deploy to HEROKU

heroku create csjs  
git push heroku master

open http://csjs.herokuapp.com/

### Deploy to local DEIS platform

deis create —cluster=dev csjs  
git push deis master

open http://csjs.local.deisapp.com

curl -i -F file=@test/fixtures/example.coffee http://csjs.local.deisapp.com/cs2js

