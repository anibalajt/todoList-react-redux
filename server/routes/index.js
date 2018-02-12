import express from "express";
const listCtrl = require("../controllers/list");
let api = express.Router();

api.post("/addItem", listCtrl.addItem);
api.post("/editItem", listCtrl.editItem);
api.get("/deleteItem", listCtrl.deleteItem);
api.get("/completedItem", listCtrl.completedItem);
api.get("/clearCompleted", listCtrl.clearCompleted);

export default api;
