const original = {
    a: 1,
    b: 2,
    c: 3,
};
// -------
let sinB = null;
let valorDeC = null;

// ------- - sinB: Una copia del objeto original sin la clave "b"

const {b, ...rest} = original;
sinB = rest;

// ------- valorDeC: Obtener el valor de la clave "c". (¡No puede hacer "valorDeC = original.c"!)

const {c} = original;
valorDeC = c;



console.log(sinB);
console.log(valorDeC);