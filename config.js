(function (){
  'use strict';

  var session      = require("express-session"),
      RedisStore   = require('connect-redis')(session),
      redis        = require('redis');

  var client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST, 
                                  {auth_pass: process.env.REDIS_PASS,
                                  tls: { servername: process.env.REDIS_HOST }});
  
  module.exports = {
    session: {
      name: 'md.sid',
      secret: 'sooper secret',
      resave: false,
      saveUninitialized: true
    },

    session_redis: {
      store: new RedisStore({client: client}),
      name: 'md.sid',
      secret: 'sooper secret',
      resave: false,
      saveUninitialized: true
    }
  };
}());
