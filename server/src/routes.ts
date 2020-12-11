import express from "express";

import UserController from "./Controllers/UserController";

const route = express.Router();

route.get("/", UserController.index);
route.post("/create", UserController.create);
route.get("/show/:id", UserController.show);

export default route;
