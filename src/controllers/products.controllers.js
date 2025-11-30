import productsServices from "../services/products.services.js"


export const getAllProducts = async (req, res) => {
try{
 const products=  await productsServices.getAllProductsService()
   console.log("Productos desde Firestore",products)
 res.status(200).json(products);
}catch(error){
  res.status(500).json({error:"Error al obtener productos"})

}
  
};


export const getProductById = async (req, res) => {
  try{
  const id = req.params.id; 
  if (id){
  const product = await productsServices.getProductByIdService(id)
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
}else{
  res.status(400).json({message: "Falta el parametro id"})
}
  }catch(error){
     res.status(500).json({error:"Error al obtener producto"})
  }

};

export const createProduct= async(req,res)=>{
  try{
const id = await productsServices.createProductService(req.body);
res.status(201).json({message:"Producto agregado",id})
  }catch (error){
    res.status(500).json({error:"Error al agregar producto"})
  }
  
}




export const deleteProduct=async (req,res)=>{
  try{
  await productsServices.deleteProductService (req.params.id);
  res.status(200).json({message:"Producto eliminado"})
  }catch(error){
    res.status(500).json({error:"Error al eliminar producto"})
  }
}