import express from "express"
import cors from "cors";
import "dotenv/config";
import rutasLog from "../src/routes/auth.routes.js"
import rutasProductos from "../src/routes/products.routes.js"

const app=express()
const PORT =process.env.PORT || 3000;// busca el puerto declarado en el archivo .env y si no lo encuentra usa el 3000

const corsConfig={ //configuracion de cors 
origin:["http://localhost:3000", "https://finalbacknode-kd5g.vercel.app"], //dominio permitido
methods:["GET","POST", "PUT", "DELETE"], //metodos permitidos
allowedHeaders:["Content-Type", "Authorization"],//cabeceras permitidas
exposedHeaders:["Content-Length"],//cabeceras visibles al cliente
credentials: true, //habiliar credenciales
maxAge:600, //cache preflight
optionsSuccessStatus: 204, //respuesta preflight exitosa

}

app.use(cors(corsConfig))
app.use(express.json());

app.use("/api", rutasLog)

app.use((req, _, next) => {
    console.log(`Datos received at:  ${req.method} ${req.url}`);
    next();
});

app.use("/api", rutasProductos)

app.use((_, res) => {
    res.status(404).json({error:'Recurso no encontrado o ruta inválida'});
});

/*app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})*/
export default app