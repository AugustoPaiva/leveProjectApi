const express = require("express");
const routes = express.Router();

const PersonController = require("./controllers/PersonController");
//routes
routes.get("/people", PersonController.index);
routes.get("/person/:id", PersonController.show);
routes.get("/people/:name", PersonController.showFilter);

routes.put("/person/:id", PersonController.update);
routes.post("/person", PersonController.store);
routes.delete("/person/:id", PersonController.destroy);
module.exports = routes;
