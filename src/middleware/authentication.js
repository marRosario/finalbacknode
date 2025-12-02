import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY ||"zcue782?jy@dert0pe%d39"

export const authentication = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // 👇 Si no hay header, devolvemos 401
  if (!authHeader) {
    console.log("No llegó Authorization en la request");
    return res.sendStatus(401);
  }

  // 👇 Si hay header, lo separamos
  const token = authHeader.split(" ")[1];
  if (!token) {
    console.log("Authorization llegó pero sin token");
    return res.sendStatus(401);
  }
  // 👇 Verificamos el token
  jwt.verify(token, secret_key, (err) => {
    if (err) {
      console.log("Token inválido o vencido");
      return res.sendStatus(403);
    }
    next();
  });
};
