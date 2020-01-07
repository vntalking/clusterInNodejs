/*
  Created by Kailas Walldoddi <@kailashw on github.com>
  
  Creating clusters and serving an application that uses express

*/
'use strict';

// importing the modules
const cluster = require('cluster'),
      os      = require('os').cpus().length,
      server  = require('./serverHttp');

/*
 We see if it is the master cluster in case it is,
 we will clone the cluster amount at the same time as the cores
 of the processor.
*/
if(cluster.isMaster){

  const Master = require('./work');
  const master = new Master({cluster:cluster});

  for(let i = 0; i < os; i++){
    master.liftWorker();
  }

  cluster.on('exit', (worker)=>{
    console.log(worker)
    console.log(`The Worker number: ${worker.id} is dead.`);
    master.liftWorkerError();
  });

}else{

  // Creando un servidor con http y express
  let app = new server();
  app.initiate();
  console.log(`cluster ${cluster.worker.id} is running.`)

}
