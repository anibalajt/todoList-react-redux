import express from "express";
const listCtrl = require("../controllers/list");
let API = express.Router();

API.get("/loadItems", listCtrl.loadItems);
API.post("/addItem", listCtrl.addItem);
API.post("/editItem", listCtrl.editItem);
API.get("/deleteItem", listCtrl.deleteItem);
API.get("/completedItem", listCtrl.completedItem);
API.get("/toggleAll", listCtrl.toggleAll);
API.get("/clearCompleted", listCtrl.clearCompleted);

export default API;
