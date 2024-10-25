import { Button, InputBase, Paper } from "@mui/material";
import { StyledInputTodo } from "../styled/StyledInputTodo";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/actions";

type TodoInputProps = {
  newTodo: string;
  setNewTodo: (value: string) => void;
}

export const TodoInput = ({newTodo, setNewTodo}: TodoInputProps) => {
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <StyledInputTodo>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add a new to-do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          />
        <Button variant='contained' color='success' onClick={handleAddTodo}>Add To-Do</Button>
      </Paper>
    </StyledInputTodo>
);
}