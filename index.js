
// var express = require("express");
// var cors = require("cors");
// require("dotenv").config();
// const multer = require("multer");

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "/tmp");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// var app = express();
// app.use(express.urlencoded({ extended: true }));

// app.use(cors());
// app.use("/public", express.static(process.cwd() + "/public"));

// app.get("/", function (req, res) {
//   res.sendFile(process.cwd() + "/views/index.html");
// });

// app.post("/api/fileanalyse", upload.single("upfile"), function (req, res) {
//   console.log(req.file);
//   res.json({
//     name: req.file.filename,
//     type: req.file.mimetype,
//     size: req.file.size,
//   });
// });

// const port = process.env.PORT || 3000;
// app.listen(port, function () {
//   console.log("Your app is listening on port " + port);
// });

'use strict';

require('dotenv').config();

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  try {
    res.json({
      "name": req.file.originalname,
      "type": req.file.mimetype,
      "size": req.file.size
    });
  } catch (err) {
    res.send(400);
  }
});

app.get('/hello', function (req, res) {
  res.json({ greetings: "Hello, API" });
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});