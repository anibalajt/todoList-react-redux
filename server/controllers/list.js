let nextItemId = 0;
let state = [];
export const addItem = (req, res) => {
  const text = req.body.text;
  state.push({
    id: ++nextItemId,
    text,
    completed: false
  });
  return res.status(201).send(state);
};
export const editItem = (req, res) => {
  const text = req.body.text;
  const id = req.body.id;
  state.map(
    item => (parseInt(item.id) == parseInt(id) ? (item.text = text) : item)
  );
  return res.status(201).send(state);
};
export const deleteItem = async (req, res) => {
  const id = req.query.id;
  state = await state.filter(
    item => (parseInt(item.id) == parseInt(id) ? null : item)
  );
  return res.status(201).send(state);
};
export const completedItem = (req, res) => {
  const id = req.query.id;
  state.map(
    item =>
      parseInt(item.id) == parseInt(id)
        ? (item.completed = !item.completed)
        : item
  );
  return res.status(201).send(state);
};

export const clearCompleted = async (req, res) => {
  state = await state.filter(item => {
    return !item.completed ? item : null;
  });
  return res.status(201).send(state);
};
