const express = require('express');
const csvtojson = require('csvtojson');
const app = express();
const path = require('path');

const port = process.env.PORT || 1234;

const csvFilePath = '/Users/matthewlarson/Desktop/FL_insurance_sample.csv';
// const csv = '';

const csv = function ()
  .fromFile(csvFilePath)
  .on('json', (jsonObj) => {
    console.log(jsonObj);
  })
  .on('done', (error) => {
    console.log(error);
  });

  // Limit set to 50mb to avoid error on large cvs files
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

  // Serve back static files
  app.use(express.static(path.join('index.html')));

  app.listen(port, function() {
    console.log('listening on =>', port);
  });
