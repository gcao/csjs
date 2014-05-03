exports.config = {
  "modules": [
    "copy"
  , "server"
  , "jshint"
  , "csslint"
  , "require"
  , "minify-js"
  , "minify-css"
  , "live-reload"
  , "bower"
  , "coffeescript"
  , "sass"
  , "ejs"
  , "web-package"
  , "server-reload"
  ],
  "server": {
    "port": 8000,
    "views": {
      "compileWith": "ejs",
      "extension": "ejs"
    }
  },
  "sass": {
    "lib": require("node-sass")
  }
}
