export default (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ];
    case "EDIT_ITEM":
      return state.map(
        item => (item.id === action.id ? { ...item, text: action.text } : item)
      );
    case "COMPLETED_ITEM":
      return state.map(
        item =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    case "TOGGLE_ALL":
      return state.map(
        item =>
          item.completed === action.toggle
            ? { ...item, completed: action.toggle }
            : { ...item, completed: action.toggle }
      );
    case "DELETE_ITEM":
      return state.filter(item => {
        return item.id === action.id ? null : item;
      });
    case "CLEAR_COMPLETED":
      return state.filter(item => {
        return !item.completed ? item : null;
      });
    default:
      return state;
  }
};
