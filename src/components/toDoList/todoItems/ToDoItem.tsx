import { Button, Card, CardActions, CardContent } from "@mui/material";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../../../redux/actions";
import { useState } from "react";

type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoItem = ({id, text, completed}: TodoItemProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => setIsEditing(true);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editTodo(id, newText));
    setIsEditing(false);
  };
  
  return (
    <Card key={id} sx={{ display: 'inline-block', mr: '10px' }}>
      <CardContent>
      {isEditing ? (
        <input type="text" value={newText} onChange={handleEditChange} />
      ) : (
        <span
        style={{ textDecoration: completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => dispatch(toggleTodo(id))}
        >
        {text}
        </span>
      )} 
      </CardContent>
      <CardActions>
        {isEditing ? (
          <Button variant="outlined" color='success' size='small' onClick={handleEditSubmit}>
            Save
          </Button>
        ):(
          <Button variant="outlined" color='success' size='small' onClick={handleEdit}>
            Edit
          </Button>
        )}
        <Button variant="outlined" color='error' size='small' onClick={() => dispatch(removeTodo(id))}>
          Delete 
        </Button>
      </CardActions>
    </Card>
  );
}