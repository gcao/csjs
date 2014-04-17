exports.config = {
  "modules": [
    "copy",
    "server",
    "jshint",
    "csslint",
    "require",
    "minify-js",
    "minify-css",
    "live-reload",
    "bower",
    "coffeescript",
    "sass",
    "ejs",
    "web-package"
  ],
  "server": {
    "views": {
      "compileWith": "ejs",
      "extension": "ejs"
    }
  },
  "sass": {
    "lib": require("node-sass")
  }
}
