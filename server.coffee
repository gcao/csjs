express = require 'express'
engines = require 'consolidate'
routes  = require './routes'
util    = require 'util'

formidable = require 'formidable'

exports.startServer = (config, callback) ->

  port = process.env.PORT or config.server.port

  app = express()
  server = app.listen port, ->
    console.log "Express server listening on port %d in %s mode", server.address().port, app.settings.env

  app.configure ->
    app.set 'port', port
    app.set 'views', config.server.views.path
    app.engine config.server.views.extension, engines[config.server.views.compileWith]
    app.set 'view engine', config.server.views.extension
    app.use express.favicon()
    app.use express.urlencoded()
    app.use express.json()
    app.use express.methodOverride()
    app.use express.compress()
    app.use config.server.base, app.router
    app.use express.static(config.watch.compiledDir)

  app.configure 'development', ->
    app.use express.errorHandler()

  app.get '/', routes.index(config)

  app.post '/cs2js', (req, res) ->
    form = new formidable.IncomingForm();
    form.parse req, (err, fields, files) ->
      res.writeHead(200, 'content-type': 'text/plain')
      res.write('received upload:\n\n')
      res.end(util.inspect(fields: fields, files: files))
    
  callback(server)

