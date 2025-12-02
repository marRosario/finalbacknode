import express from "express";
import { getProductById, getAllProducts,createProduct,deleteProduct } from "../controllers/products.controllers.js";
import {authentication}from "../middleware/authentication.js"
import { generateToken } from "../data/token.js";

const routes=express.Router();

routes.get("/products", getAllProducts)
routes.get("/products/:id", getProductById)
routes.post("/products", authentication,createProduct)

routes.delete("/products/:id",authentication, deleteProduct)

routes.post("/login", (req, res) => {
  const { id, email } = req.body; // datos del usuario
  if (!id || !email) {
    return res.status(400).json({ error: "Faltan datos de usuario" });
  }
  const token = generateToken({ id, email });
  res.json({ token });
});


export default routes
