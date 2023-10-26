import React, { useState } from "react";
import {

  TextField,
  Typography,
  Fab,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearAllTodo } from "../store/actions";
import TodoList from "./TodoList";

function TodoContainer() {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  const lists = useSelector((state) => {
    return state.todo.list;
  });

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addClickHandler = () => {
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  const clearALLHandler = () => {
    dispatch(clearAllTodo());
  };

  return (
    <>
      <Container
        sx={{
          backgroundColor: "#12343b",
          color: "black",
          height: "480px",
          width: "380px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" color="white">
          Todo-List
        </Typography>
        <TextField
          required
          type="text"
          fullWidth
          placeholder="Enter a Todo..."
          value={inputValue}
          onChange={inputHandler}
          sx={{ mt: "10px", bordeRadius: "10px", backgroundColor: "white" }}
        />
        <Button sx={{ mt: "10px" }} color="primary">
          <Fab color="primary">
            <AddIcon onClick={addClickHandler} />
          </Fab>
        </Button>

       
          <TodoList />
          


        {lists.length > 0 && (
          <Button
            color="secondary"
            variant="contained"
            sx={{ mt: 3 }}
            onClick={clearALLHandler}
          >
            Clear All
          </Button>
        )}
      </Container>
    </>
  );
}

export default TodoContainer;
