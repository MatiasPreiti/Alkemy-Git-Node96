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

creatortxt(
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry /n',
  14
);

function destroyer(text) {
  console.log(text);
  throw new Error();
}

exports.module = { creatortxt, destroyer };
