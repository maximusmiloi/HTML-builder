const fs = require('fs');
const path = require('path');

const writeableStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));
fs.readdir(`${__dirname}/styles`, { withFileTypes: true }, (err, files) => {
    if (err)
        console.log(err);
    else {
        
        files.forEach(file => {
        if (file.isFile() === true && path.extname(file.name).split('.')[1] == 'css') {
            const read = fs.createReadStream(path.join(__dirname, 'styles', file.name), 'utf-8');
            read.on('data', (chunk) => writeableStream.write(chunk.toString()));
          }
        })
        
    }
  })