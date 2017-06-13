

const csvFilePath = '/Users/matthewlarson/Desktop/FL_insurance_sample.csv';

csv ()
  .fromFile(csvFilePath)
  .on('json', (jsonObj) => {
    console.log(jsonObj);
  })
  .on('done', (error) => {
    console.log(error);
  });

  csv();
