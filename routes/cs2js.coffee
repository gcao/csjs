cs2js = (config) ->
  (req, res) ->
    form = new formidable.IncomingForm()
    form.parse req, (err, fields, files) ->
      fs.readFile files.file.path, 'utf8', (err, data) ->
        if err
          res.writeHead(500, 'content-type': 'text/plain')
          res.end err
        else
          res.writeHead(200, 'content-type': 'text/plain')
          res.end coffee.compile data

exports.cs2js = cs2js

