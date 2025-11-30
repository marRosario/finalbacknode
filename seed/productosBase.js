import {agregarProducto}from "../src/models/products.models.js"

const productos=[
{ nombre: "yerba", categoria: "infusion", precio: 200 },
  { nombre: "agua", categoria: "bebida", precio: 100 },
  { nombre: "coca-cola", categoria: "bebida", precio: 1200 },
  { nombre: "papas", categoria: "snack", precio: 800 }
]

for (const prod of productos){
    await agregarProducto(prod)
}

console.log("Productos iniciales cargados sin  duplicar ")

//npm run seed