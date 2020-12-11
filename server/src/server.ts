import express from "express";
import cors from "cors";

import routes from "./routes";
import errorHandler from "./Errors/handler";

import "./Database/connectionDatabase";
import "reflect-metadata";
import "express-async-errors";

const server = express();

// server.use(cors());
server.use(express.json());

server.use("/", routes);
server.use(errorHandler);

server.listen("3200", () => {
  console.log("🚀 Server started on http://localhost:3200");
});
