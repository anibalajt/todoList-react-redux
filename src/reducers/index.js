export default (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "EDIT_ITEM":
    return state.map(
      item =>
        item.id === action.id ? { ...item, text: action.text } : item
    );
    case "COMPLETED_ITEM":
      return state.map(
        item =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    default:
      return state;
  }
};

// export default items;
