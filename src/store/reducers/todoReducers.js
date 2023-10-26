const initialState = {
  list: [],
};


const todoReducers = (state = initialState, action) => {
   console.log("todoreducers11", state.list);


  switch (action.type) {
    case "ADD_TODO":
      return {
        //...state
        list: [...state.list, action.payload],
      };

    case "CHECK_TODO":
      const checklist = state.list.map((element) => {
        if (element.id === action.checkId) {
          element.done = !element.done;
        }
        return element;
      });
      return {
        list: checklist,
      };
         
    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        //...state,
        list: newList,
      };

    case "CLEAR_ALL_TODO":
      return {
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducers;
