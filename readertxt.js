const fs = require('fs');

const streamRead = fs.createReadStream('./file.txt', { encoding: 'utf8' });

function reader() {
  streamRead
    .on('open', () => {
      console.log('abriendo archivo');
    })
    .on('data', () => {
      console.log('----');
    })
    .on('close', () => {
      console.log('archivo cerrado');
    })
    .on('error', () => {
      console.log('error en el archivo');
    });
}

exports.module = { reader };
