# CoffeeScript <=> JavaScript

## Introduction

## Misc

GET  / provide a CS <=> CS converter

GET  /cs2js.html provide a form to upload and compile CoffeeScript file
POST /cs2js handle form submission and return output

GET  /js2cs.html provide a form to upload and convert JavaScript to CoffeeScript
POST /js2cs handle form submission and return output

To start the local server:
mimosa watch -s

open http://localhost:8000

open http://csjs.herokuapp.com/

See https://ariejan.net/2010/06/07/uploading-files-with-curl/
curl -i -F file=@test/fixtures/example.coffee http://localhost:8000/cs2js
curl -i -F file=@test/fixtures/bad.coffee http://localhost:8000/cs2js

