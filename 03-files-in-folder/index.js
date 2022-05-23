const fs = require('fs');
const path = require('path');


// Function to get current filenames
// in directory
fs.readdir(`${__dirname}/secret-folder`, { withFileTypes: true }, (err, files) => {
  if (err)
      console.log(err);
  else {
      files.forEach(file => {
      if (file.isFile() === true) {
        fs.stat(`${__dirname}/secret-folder/${file.name}`, (error, stats) => {
          console.log(file.name.split('.')[0] + ' - ' + path.extname(file.name).split('.')[1] + ' - ' + (stats.size * 0.001) + 'kb');
        })
        }
      })
  }
})

