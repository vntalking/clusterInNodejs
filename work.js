/*
  Created by Kailas Walldoddi <@kailashw on github.com>
  
*/
'use strict';

// Class to pick cluster workers
class Master {
  constructor(config){

    this.config = config || {};
    this.cluster = this.config.cluster;

  }

  // Pick up a new Worker
  liftWorker(){

    let worker = this.cluster.fork();
    console.log(`The worker ${worker.id} is started.`);

  }

  // Raise a worker when one dies in case of errors
  liftWorkerError(){
    let worker = this;

    setTimeout(()=>{
      worker.liftWorker();
    }, 200);

  }
}

module.exports = Master;
