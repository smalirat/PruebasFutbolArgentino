import express from "express";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

/*app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "UPDATE"],
  credentials: true
}));
app.use(express.json()); */

/*import routes from "./PruebasFutbolArgentino/routes/routes.js";
routes.forEach((r) => {
  app.use(r); // Se asume que cada r es un router de Express
});*/

// Iniciar servidor
app.listen(port, () => {
  console.log("Server running on port " + port);
});
