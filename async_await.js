const { destroyer } = require('./creatortxt');

async function esperar2segundos() {
  console.error(11);
  destroyer('i destroy this function');
  return await new Promise((resolve) => {
    setTimeout(() => {
      console.error(4);
      resolve();
    }, 4500);
  });
}

async function ejecutarMensajes() {
  console.log(2);
  await esperar2segundos();
  console.log(5);
}

ejecutarMensajes();
