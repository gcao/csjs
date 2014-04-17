"use strict";

var path = require( "path" )
  , config = require( "./config" )
  , getExtensions = function ( mimosaConfig ) {
    return mimosaConfig.ejs.extensions;
  }
  , _transform = function (output) {
    return output.replace(/\nescape[\s\S]*?};/, "escape = escape || globalEscape; filters = filters || globalFilters;");
  }
  , boilerplate = "var templates = {};\n" +
    "var globalEscape = function(html){\n" +
    "  return String(html)\n" +
    "    .replace(/&(?!\w+;)/g, '&amp;')\n" +
    "    .replace(/</g, '&lt;')\n" +
    "    .replace(/>/g, '&gt;')\n" +
    "    .replace(/\"/g, '&quot;')};\n";

var prefix =  function ( config, libraryPath ) {
  if ( config.template.wrapType === "amd" ) {
    return "define(['" + libraryPath + "'], function (globalFilters){\n"  + boilerplate;
  } else {
    if ( config.template.wrapType === "common" ) {
      return "var globalFilters = require('" + config.template.commonLibPath + "')\n" + boilerplate;
    }
  }
  return boilerplate;
};

var suffix = function ( config ) {
  if ( config.template.wrapType === "amd" ) {
    return "return templates; });";
  } else {
    if ( config.template.wrapType === "common" ) {
      return "\nmodule.exports = templates;";
    }
  }

  return "";
};

var compile = function ( mimosaConfig, file, cb ) {
  var error, output;

  try {
    var opts = {
      compileDebug: false,
      client: true,
      filename: file.inputFileName
    };
    output = mimosaConfig.ejs.lib.compile( file.inputFileText, opts );
    output = _transform( output + "" );
  } catch ( err ) {
    error = err;
  }

  cb( error, output );
};

module.exports = {
  name: "ejs",
  compilerType: "template",
  clientLibrary: path.join( __dirname, "client", "ejs-filters.js" ),
  compile: compile,
  suffix: suffix,
  prefix: prefix,
  extensions: getExtensions,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};
