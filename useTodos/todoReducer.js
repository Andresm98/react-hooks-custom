export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      // throw new Error("Action.type = ABC not is implemented yet");
      return [...initialState, action.payload];

    case "[TODO] Remove Todo":
      return initialState.filter((todos) => todos.id !== action.payload);

    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });

    case "[TODO] Edit Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            description: action.description,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
