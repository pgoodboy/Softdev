const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var mysql      = require('mysql');

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'P@ssw0rd',
    database : 'GrowX', 
    multipleStatements: true
  });
  
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
      console.log('connected as id ' + connection.threadId);
});

app.get('/records/1', function(req, res){
    var sendData = []
    sql="SELECT value, time FROM sensorLog WHERE sensorID = 1 IN (SELECT sensorID FROM records WHERE farmID = 1);SELECT value, time FROM sensorLog WHERE sensorID = 2 IN (SELECT sensorID FROM records WHERE farmID = 1);SELECT value, time FROM sensorLog WHERE sensorID = 3 IN (SELECT sensorID FROM records WHERE farmID = 1);SELECT value, time FROM sensorLog WHERE sensorID = 4 IN (SELECT sensorID FROM records WHERE farmID = 1);SELECT value, time FROM sensorLog WHERE sensorID = 5 IN (SELECT sensorID FROM records WHERE farmID = 1)"; // query data
    connection.query(sql, function(err, result){
      console.log(result[0])
      console.log(result[1])
      console.log(result[2])
      console.log(result[3])
      console.log(result[4])
      sendData.push(result[0])
      sendData.push(result[1])
      sendData.push(result[2])
      sendData.push(result[3])
      sendData.push(result[4])
      res.send(sendData)
    })
});
app.get('/records/2', function(req, res){
  var sendData = []
    sql="SELECT value, time FROM sensorLog WHERE sensorID = 1 IN (SELECT sensorID FROM records WHERE farmID = 2);SELECT value, time FROM sensorLog WHERE sensorID = 2 IN (SELECT sensorID FROM records WHERE farmID = 2);SELECT value, time FROM sensorLog WHERE sensorID = 3 IN (SELECT sensorID FROM records WHERE farmID = 2);SELECT value, time FROM sensorLog WHERE sensorID = 4 IN (SELECT sensorID FROM records WHERE farmID = 2);SELECT value, time FROM sensorLog WHERE sensorID = 5 IN (SELECT sensorID FROM records WHERE farmID = 2)"; // query data
    connection.query(sql, function(err, result){
      console.log(result[0])
      console.log(result[1])
      console.log(result[2])
      console.log(result[3])
      console.log(result[4])
      sendData.push(result[0])
      sendData.push(result[1])
      sendData.push(result[2])
      sendData.push(result[3])
      sendData.push(result[4])
      res.send(sendData)
    })
});
app.get('/records/3', function(req, res){
  var sendData = []
    sql="SELECT value, time FROM sensorLog WHERE sensorID = 1 IN (SELECT sensorID FROM records WHERE farmID = 3);SELECT value, time FROM sensorLog WHERE sensorID = 2 IN (SELECT sensorID FROM records WHERE farmID = 3);SELECT value, time FROM sensorLog WHERE sensorID = 3 IN (SELECT sensorID FROM records WHERE farmID = 3);SELECT value, time FROM sensorLog WHERE sensorID = 4 IN (SELECT sensorID FROM records WHERE farmID = 3);SELECT value, time FROM sensorLog WHERE sensorID = 5 IN (SELECT sensorID FROM records WHERE farmID = 3)"; // query data
    connection.query(sql, function(err, result){
      console.log(result[0])
      console.log(result[1])
      console.log(result[2])
      console.log(result[3])
      console.log(result[4])
      sendData.push(result[0])
      sendData.push(result[1])
      sendData.push(result[2])
      sendData.push(result[3])
      sendData.push(result[4])
      res.send(sendData)
    })
});
app.get('/records/4', function(req, res){
  var sendData = []
    sql="SELECT value, time FROM sensorLog WHERE sensorID = 1 IN (SELECT sensorID FROM records WHERE farmID = 4);SELECT value, time FROM sensorLog WHERE sensorID = 2 IN (SELECT sensorID FROM records WHERE farmID = 4);SELECT value, time FROM sensorLog WHERE sensorID = 3 IN (SELECT sensorID FROM records WHERE farmID = 4);SELECT value, time FROM sensorLog WHERE sensorID = 4 IN (SELECT sensorID FROM records WHERE farmID = 4);SELECT value, time FROM sensorLog WHERE sensorID = 5 IN (SELECT sensorID FROM records WHERE farmID = 4)"; // query data
    connection.query(sql, function(err, result){
      console.log(result[0])
      console.log(result[1])
      console.log(result[2])
      console.log(result[3])
      console.log(result[4])
      sendData.push(result[0])
      sendData.push(result[1])
      sendData.push(result[2])
      sendData.push(result[3])
      sendData.push(result[4])
      res.send(sendData)
    }) 
});
  app.listen(process.env.PORT || 8081)
