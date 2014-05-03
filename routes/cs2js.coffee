util       = require 'util'
fs         = require 'fs'
coffee     = require 'coffee-script'
formidable = require 'formidable'

cs2js = (config) ->
  (req, res) ->
    form = new formidable.IncomingForm()
    form.parse req, (err, fields, files) ->
      if files.file
        fs.readFile files.file.path, 'utf8', (err, data) ->
          try
            output = coffee.compile data
            res.writeHead(200, 'content-type': 'text/plain')
            res.end output
          catch ex
            res.writeHead(500, 'content-type': 'text/plain')
            res.end util.inspect ex

      else
        res.writeHead(200, 'content-type': 'text/plain')
        res.end '/* No CoffeeScript code is passed in. */'

exports.cs2js = cs2js

