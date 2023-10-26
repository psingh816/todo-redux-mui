import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Typography,
  IconButton,
  Checkbox,
  Card,
  CardContent,
  CardActions,
  Box,
  Button,
} from "@mui/material";
import { deleteTodo, checkTodo } from "../store/actions";

const TodoList = () => {
  //const [check, setCheck] = useState(false);

  const dispatch = useDispatch();

  const lists = useSelector((state) => {
    return state.todo.list;
  });

  const deleteClickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const checkClickHandler = (checkId) => {
    dispatch(checkTodo(checkId ));
   
  };

  return (
    <Box>
      {lists.map((element) => {
        return (
          <Card
            key={element.id}
            sx={{
              border: "1px solid #ccc",
              backgroundColor: "lightgray",
              mt: 1,
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <Checkbox
                checked={element.done}
                sx={{ float: "left" }}
                onChange={() => checkClickHandler(element.id)}
              />

              {/*<span style={{ textDecoration: check ? "line-through" : "none" }}>
                {element.title}
          </span>*/}

               <span style={element.done===true? {textDecoration:"line-through"}: 
                 {textDecoration:"none"}}>
                {element.title}
              </span>

              <Button sx={{ float: "right" }}>
                <DeleteIcon
                  sx={{ color: "red" }}
                  onClick={() => deleteClickHandler(element.id)}
                />
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default TodoList;
