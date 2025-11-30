import { db } from "../data/data.js";

import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  deleteDoc,
} from "firebase/firestore";

export async function obtenerProducto(id) {
  try {
    const docSnap = await getDoc(doc(db, "productos", id)); 
    if (docSnap.exists()) {
      console.log("Producto:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No existe el  documento!");
      return null;
    }
  } catch (error) {
    console.log("Error al obtener producto", error);
    throw error;
  }
}

export async function obtenerProductos() {
  try {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const productos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.table(productos);
    return productos;
  } catch (error) {
    console.log("Error al obtener productos", error);
    throw error;
  }
}

export async function agregarProducto(producto) {
  try {
    const id =
      producto.categoria.slice(0, 3).toLowerCase() +
      producto.nombre.slice(0, 3).toLowerCase();
    await setDoc(doc(db, "productos", id), producto); //setDoc sobreescribe si ya existe
    console.log("Producto agregado con ID:", id);
    return id;
  } catch (error) {
    console.log("Error al agregar producto:", error);
    throw error;
  }
}



export async function eliminarProducto(id) {
  try {
    await deleteDoc(doc(db, "productos", id));
    console.log("Producto eliminado");
  } catch (error) {
    console.log("Error al eliminar el producto ", error);
    throw error;
  }
}