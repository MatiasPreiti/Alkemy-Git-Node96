const { destroyer } = require('./creatortxt');

async function esperar4segundos() {
  console.log(3);
  destroyer('i destroy this function');
  return await new Promise((resolve) => {
    setTimeout(() => {
      console.error(4);
      resolve();
    }, 4000);
  });
}

async function ejecutarMensajes() {
  console.log(2);
  await esperar4segundos();
  console.log(5);
}

ejecutarMensajes();
