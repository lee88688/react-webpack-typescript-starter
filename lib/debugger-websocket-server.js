'use strict';

const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9090 });
console.log('start server at localhost:9090');
let debuggerClient = null;
const clientCache = [];
let debuggerServer = null;
const serverCache = [];

wss.on('connection', (ws, request) => {
  if (!debuggerClient && request.url === '/client') {
    console.log('client has connected!');
    debuggerClient = ws;
    debuggerClient.on('message', (message) => {
      if (!debuggerServer) {
        serverCache.push(message);
        return;
      }
      debuggerServer.send(message);
    });
    let message = clientCache.shift();
    while (message) {
      debuggerClient.send(message);
      message = clientCache.shift();
    }
  } else if (!debuggerServer && request.url === '/server') {
    console.log('server has connected!');
    debuggerServer = ws;
    debuggerServer.on('message', (message) => {
      if (!debuggerClient) {
        clientCache.push(message);
        return;
      }
      debuggerClient.send(message);
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
