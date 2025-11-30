import { obtenerProducto, obtenerProductos,agregarProducto,eliminarProducto} from "../models/products.models.js";

export const getAllProductsService = async () => {
  try {
    const products = await obtenerProductos();
    return products;
  } catch (error) {
    throw error;
  }
};

//obtener productos por id

export const getProductByIdService = async (id) => {
  try {
    const product = await obtenerProducto(id);
    return product;
  } catch (error) {
    throw error;
  }
};

export const createProductService = async (data) => {
  try {
    const id = await agregarProducto(data);
    return id;
  } catch (error) {
    throw error;
  }
};

export const deleteProductService = async (id) => {
  try {
    await eliminarProducto(id);
    return true;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService,
};
