import { useEffect, useReducer } from "react";

import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
  { id: new Date().getTime(), description: "Recolectar Pieza 1", done: false },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar Pieza 2",
    done: false,
  },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    // console.log(id);
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    // console.log(id);
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  const handleEditTodo = (id, description) => {
    if (description === undefined || description.length === 0) return;
    dispatch({
      type: "[TODO] Edit Todo",
      payload: id,
      description: description,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    handleEditTodo,
  };
};
