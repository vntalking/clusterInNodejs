/*
  Created by Kailas Walldoddi <@kailashw on github.com>
*/
'use strict';

const express = require('express');

class Server {
  constructor(config){
    this.config = config || {};
    this.server = express();
  }

  // Serving the routes get
  gets(){

    this.server.get('/', (sol, res, next)=>{
      
      res.send(`This route is served by the workes`);

    });

    this.server.get(`/hello`,(sol, res, next)=>{

      res.send('This route too 🙈');

    });

  }

}

module.exports = Server;
