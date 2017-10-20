/*
This file runs the website
*/
//basic server setup
const express = require('express');
const knex = require('knex')({ client: 'mysql' });
const INQUIRY = ['name', 'email', 'message', 'createdAt', 'updatedAt'];


var http = require('http');


var server = http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello');
});

server.listen(3000, '127.0.0.1');
console.log('yo bitches');
