export const addTodo = (inputValue) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: Date.now(),
      title: inputValue,
      done: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const checkTodo = (checkId) => {
  return {
    type: "CHECK_TODO",
    checkId
  };
};

export const clearAllTodo = () => {
  return {
    type: "CLEAR_ALL_TODO",
  };
};
