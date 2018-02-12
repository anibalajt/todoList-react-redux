let nextItemId = 0;
let state = []
export const addItem = (req, res) => {
  return res.status(201).send({ aaa: "addItem" });
};
export const editItem = (req, res) => {
  return res.status(201).send({ aaa: "editItem" });
};
export const deleteItem = (req, res) => {
  return res.status(201).send({ aaa: "deleteItem" });
};
export const completedItem = (req, res) => {
  return res.status(201).send({ aaa: "completedItem" });
};
export const toggleAll = (req, res) => {
  return res.status(201).send({ aaa: "toggleAll" });
};
export const clearCompleted = (req, res) => {
  return res.status(201).send({ aaa: "clearCompleted" });
};
