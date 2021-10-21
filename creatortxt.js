const fs = require('fs');

const streamEscritura = fs.createWriteStream('./file.txt');

function creatortxt(text, iterations) {
  for (var i = 0; i < iterations; i++) {
    text += text;

    streamEscritura.write(text, (res) => {
      console.log('...');
    });
  }

  fs.writeFile('./file.txt', text, () => {
    console.log('your file has been created');
  });
}
creatortxt('asdsada', 14);
exports.module = { creatortxt };
