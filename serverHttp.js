/*
  Created by Kailas Walldoddi <@kailashw on github.com>
*/
'use strict';

const http = require('http'),
  express  = require('./express');

// Creating the server with http
class Servidor{
  constructor(config){
    this.config = config || {};

    this.app = new express();

    this.server = http.createServer(this.app.server);

    this.app.gets();

  }

  // Starting the server
  initiate(){
    
    this.server.listen(3000, ()=> console.log('The server is running on port 3000'));

  }
}

module.exports = Servidor;
