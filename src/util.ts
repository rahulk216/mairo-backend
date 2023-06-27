import * as jwt from "jsonwebtoken";

export function generateJWT(name: string, id: number) {
  return jwt.sign(
    {
      name,
      id,
    },
    process.env.JSON_T0KEN_KEY,
    {
      expiresIn: 3600000,
    },
  );
}