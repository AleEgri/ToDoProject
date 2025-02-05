import { Box, Button, IconButton, InputBase } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/actions";

type CompletedTodoProps = {
  id: number;
  tag: string;
  text: string;
  assignedTo: string;
}

export const CompletedTodo = (props: CompletedTodoProps) => {
  const { id, tag, text, assignedTo } = props;

  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
      <Button
        variant="contained"
        sx={{ borderRadius: 30, padding: "5px 30px", backgroundColor: 'gray' }}
      >
        {tag}
      </Button>
      <InputBase
        disabled={true}
        value={text}
      />
      <span>
        Assign to: <strong>{assignedTo}</strong>
      </span>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => dispatch(removeTodo(id))}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}