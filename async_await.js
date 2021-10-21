const { destroyer } = require('./creatortxt');

async function esperar4segundos() {
  destroyer();
  console.log(3);
  return await new Promise((resolve) => {
    setTimeout(() => {
      console.log(4);
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
