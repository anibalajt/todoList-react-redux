let nextItemId = 0;
export const addItem = text => {
  return {
    type: "ADD_ITEM",
    id: nextItemId++,
    text
  };
};
export const editItem = (id,text) => {
  return {
    type: "EDIT_ITEM",
    id,
    text
  };
};
export const completedItem = id => {
  return {
    type: "COMPLETED_ITEM",
    id
  };
};
