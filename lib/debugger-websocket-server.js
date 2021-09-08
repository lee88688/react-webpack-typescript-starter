'use strict';

const { WebSocketServer } = require('ws');
const net = require('net');

const wss = new WebSocketServer({ port: 9090 });
console.log('start server at localhost:9090');
let debuggerClient = null;
const clientCache = [];
let debuggerServer = null;
const serverCache = [];

wss.on('connection', (ws, request) => {
  console.log('a websocket is connected!');
  // if (
  //   !debuggerClient &&
  //   (request.url === '/client' || request.url === '/jerry-debugger')
  // ) {
  //   console.log('client has connected!');
  //   debuggerClient = ws;
  //   debuggerClient.on('message', (message) => {
  //     if (!debuggerServer) {
  //       serverCache.push(message);
  //       return;
  //     }
  //     debuggerServer.send(message);
  //   });
  //   let message = clientCache.shift();
  //   while (message) {
  //     debuggerClient.send(message);
  //     message = clientCache.shift();
  //   }
  // }
  if (!debuggerServer && (request.url === '/server' || request.url === '/')) {
    console.log('server has connected!');
    debuggerServer = ws;
    debuggerServer.on('message', (message) => {
      if (!debuggerClient) {
        clientCache.push(message);
        return;
      }
      debuggerClient.write(message);
    });
    let message = serverCache.shift();
    while (message) {
      debuggerServer.send(message);
      message = serverCache.shift();
    }
  }
});

wss.on('close', (ws) => {
  if (ws === debuggerServer) {
    console.log('server closed');
    debuggerServer = null;
  } else if (ws === debuggerClient) {
    console.log('client closed');
    debuggerClient = null;
  }
});

wss.on('error', (error) => console.log(error));

const socketServer = net.createServer();
socketServer.listen(9091, '127.0.0.1', () => {
  console.log('client server started!');
});

socketServer.on('connection', (socket) => {
  console.log('client connected!');
  debuggerClient = socket;

  debuggerClient.on('data', (data) => {
    console.log('resolve data from client.');
    if (!debuggerServer) {
      serverCache.push(data);
      return;
    }
    debuggerServer.send(data);
  });
  let data = clientCache.shift();
  while (data) {
    debuggerClient.write(data);
    data = serverCache.shift();
  }

  debuggerClient.on('close', () => {
    debuggerClient = null;
    console.log('client closed!');
  });
});
