"use strict";

exports.defaults = function() {
  return {
    ejs: {
      extensions: [ "ejs" ]
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
         "  ejs:                   # config settings for the EJS compiler module\n" +
         "    lib: undefined       # use this property to provide a specific version of EJS\n" +
         "    extensions: [\"ejs\"]  # default extensions for EJS files\n";
};

exports.validate = function( config, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "ejs config", config.ejs ) ) {

    if ( !config.ejs.lib ) {
      config.ejs.lib = require( "ejs" );
    }

    if ( validators.isArrayOfStringsMustExist( errors, "ejs.extensions", config.ejs.extensions ) ) {
      if (config.ejs.extensions.length === 0) {
        errors.push( "ejs.extensions cannot be an empty array");
      }
    }
  }

  return errors;
};
