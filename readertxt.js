const fs = require('fs');

const streamRead = fs.createReadStream('./file.txt', { encoding: 'utf8' });

function reader() {
  streamRead
    .on('open', () => {
      console.log('open file');
    })
    .on('data', () => {
      console.log('----');
    })
    .on('close', () => {
      console.log('file closed');
    })
    .on('error', () => {
      console.log('error in the file');
    });
}

exports.module = { reader };
