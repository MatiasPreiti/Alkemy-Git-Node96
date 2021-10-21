const originalA = {
    nombre: 'Sergio',
    edad: 28,
    preferidos: ['Pizza', 'Hamburguesa'],
    madre: {
        nombre: 'Sandra',
        edad: 54,
    },
};
const originalB = '{"nombre":"Damian","edad":26}';
// -------
let edadMadre = 0;
let objetoParseado = null;
let existeClaveMadreA = null;
let existeClaveMadreB = null;
let nombreDelMasJoven = null;
let clavesDelObjeto = [];

// ------- edadMadre: Edad de la madre

edadMadre = originalA.madre.edad;

// ------- objetoParseado: Objeto "originalB" parseado a objeto

objetoParseado = JSON.parse(originalB); //rodearlo con un try/catch

// ------- existeClaveMadreA: Si existe la clave madre en el objeto 'originalA'

existeClaveMadreA = originalA.hasOwnProperty("madre");

// ------- existeClaveMadreB: Si existe la clave madre en el objeto 'originalB'

existeClaveMadreB = objetoParseado.hasOwnProperty("madre");

// ------- nombreDelMasJoven: Nombre de la persona mas joven

const personaMasJoven = () => {
    if(originalA.edad < objetoParseado.edad){
        nombreDelMasJoven = originalA.nombre;
    }else {
        nombreDelMasJoven = objetoParseado.nombre;
    }
};

personaMasJoven();

// ------- clavesDelObjeto: Que claves contiene el objeto 'originalA'

clavesDelObjeto = Object.keys(originalA);



console.log(edadMadre);
console.log(objetoParseado);
console.log(existeClaveMadreA);
console.log(existeClaveMadreB);
console.log(nombreDelMasJoven);
console.log(clavesDelObjeto);