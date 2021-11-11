//Ejercicios para sección reportes
//Hacer la función encontrarNumeroMayor que reciba un array de números y retorne el mayor de todos ellos. (Pista: usá reduce)

const numeros = [2, 3, 4, 99, 5, 9, 65, 32];
const masNumeros = [43, 21, 23, 66, 54, 32, 199, 54, 63];

const encontrarNumeroMayor = (array) => {
  const numeroMayor = array.reduce((acc, curr, index, array) => {
    if (acc < curr) {
      acc = curr;
    }
    return acc;
  }, 0);
  return numeroMayor;
};

console.log(encontrarNumeroMayor(numeros)); // deberias ver 99
console.log(encontrarNumeroMayor(masNumeros)); // deberias ver 199

//Una vez resuelto el ejercicio anterior, vamos a complicarlo. Dado un array de objetos, hacé la función encontrarNumeroMayorEnArrayDeObjetos que reciba un array de objetos y retorne el objeto que tiene el mayor número en la propiedad monto. La estrategia deberia ser similar al ejercicio anterior. Pista: recordá que en un reduce, si no le pasas un valor inicial a la acumuladora, la acumuladora tendrá el valor del primer elemento del array.
const objetos = [
  {
    tipo: "ganancia",
    categoria: "comida",
    monto: 10,
  },
  {
    tipo: "ganancia",
    categoria: "salida",
    monto: 100,
  },
  {
    tipo: "gasto",
    categoria: "salida",
    monto: 1000,
  },
  {
    tipo: "gasto",
    categoria: "salida",
    monto: 10000,
  },
  {
    tipo: "ganancia",
    categoria: "comida",
    monto: 1000,
  },
];

const masObjetos = [
  {
    tipo: "ganancia",
    categoria: "comida",
    monto: 99,
  },
  {
    tipo: "ganancia",
    categoria: "salida",
    monto: 999,
  },
  {
    tipo: "gasto",
    categoria: "salida",
    monto: 999999,
  },
  {
    tipo: "ganancia",
    categoria: "salida",
    monto: 999,
  },
  {
    tipo: "ganancia",
    categoria: "comida",
    monto: 99999,
  },
];

const encontrarNumeroMayorEnArrayDeObjetos = (array) => {
  const objetoMayor = array.reduce((acc, curr) => {
    if (acc.monto < curr.monto) {
      acc = curr;
    }
    return acc;
  });
  return objetoMayor;
};

console.log(encontrarNumeroMayorEnArrayDeObjetos(objetos)); // deberias ver { tipo: "gasto", categoria: "salida", monto: 10000 }
console.log(encontrarNumeroMayorEnArrayDeObjetos(masObjetos)); // deberias ver { tipo: "gasto", categoria: "salida", monto: 999999 }

// Una vez resuelto el ejercicio anterior, declará la función obtenerObjetoConMayorGanancia que reciba un array de objetos y retorne el objeto que tenga el mayor monto pero sólo si su tipo es ganancia. La estrategia debería ser similar a la del ejercicio anterior. Pista: recordá que podés usar if adentro de un reduce.

// usá los mismos arrays de objetos que usamos en el ejercicio anterior

const obtenerObjetoConMayorGanancia = (array) => {
  const objetosGanancia = array.filter((curr) => {
    return curr.tipo === "ganancia";
  });
  const objetoMayorGanancia = objetosGanancia.reduce((acc, curr) => {
    if (acc.monto < curr.monto) {
      acc = curr;
    }
    return acc;
  });
  return objetoMayorGanancia;
};

console.log(obtenerObjetoConMayorGanancia(objetos)); // deberias ver { tipo: "ganancia", categoria: "comida", monto: 1000 }
console.log(obtenerObjetoConMayorGanancia(masObjetos)); // deberias ver { tipo: "ganancia", categoria: "comida", monto: 99999 }

//Una vez resuelto el ejercicio anterior, declará la función obtenerCategoriaConMayorGanancia que reciba un array de objetos y retorne sólo la propiedad categoria del objeto que tenga el mayor monto pero sólo si su tipo es ganancia. La estrategia debería ser similar a la del ejercicio anterior. Pista: recordá que podés usar el operador && adentro de un if para encadenar varias condiciones.

// usá los mismos arrays de objetos que usamos en el ejercicio anterior

const obtenerCategoriaConMayorGanancia = (array) => {
  const objetosGanancia = array.filter((curr) => {
    return curr.tipo === "ganancia";
  });
  const objetoMayorGanancia = objetosGanancia.reduce((acc, curr) => {
    if (acc.monto < curr.monto) {
      acc = curr;
    }
    return acc;
  });
  return objetoMayorGanancia.categoria;
};

console.log(obtenerCategoriaConMayorGanancia(objetos)); // deberias ver  "comida"
console.log(obtenerCategoriaConMayorGanancia(masObjetos)); // deberias ver "comida"
