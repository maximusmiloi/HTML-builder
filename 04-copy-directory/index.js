//const fsPromises = require('fs/promises');
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'),  (err) => {
  if(err) {
    console.log('Папка создана');
  }
});
fs.readdir(`${__dirname}/files`, (err, files) => {
  if (err)
      console.log(err);
  else {
      files.forEach(file => {
        fs.copyFile(`${__dirname}/files/${file}`, `${__dirname}/files-copy/${file}`, (err) => {
          if (err) {
            console.log("Error Found:", err);
          }
          else {
            console.log("Скопировано");
          }
        });
      })
      fs.readdir(`${__dirname}/files-copy`, (err, filesCopy) => {
        if (err)
            console.log(err);
        else {
            if ( files.length !== filesCopy.length ) {
              var deleteFile = filesCopy.filter(i => files.indexOf(i) < 0)
              for ( i = 0; i < deleteFile.length; i++) {
                fs.unlink(`${__dirname}/files-copy/${deleteFile[i]}`, (err) => {} )
              }
            }
        }
      }) 
  }
})