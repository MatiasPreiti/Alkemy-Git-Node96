const { destroyer } = require('./creatortxt');

async function esperar2segundos() {
  console.log(3);
  destroyer('i destroy this function');
  return await new Promise((resolve) => {
    setTimeout(() => {
      console.log(4);
      resolve();
    }, 2000);
  });
}

async function ejecutarMensajes() {
  console.log(2);
  await esperar2segundos();
  console.log(5);
}

ejecutarMensajes();
