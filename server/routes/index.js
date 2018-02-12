import express from "express";
const listCtrl = require("../controllers/list");
let api = express.Router();

api.get("/addItem", listCtrl.addItem);
api.get("/editItem", listCtrl.editItem);
api.get("/deleteItem", listCtrl.deleteItem);
api.get("/completedItem", listCtrl.completedItem);
api.get("/toggleAll", listCtrl.toggleAll);
api.get("/clearCompleted", listCtrl.clearCompleted);

export default api;
