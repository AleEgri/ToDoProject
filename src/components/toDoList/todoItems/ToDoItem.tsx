import {
  Button,
  Card,
  Checkbox,
  IconButton,
  Box,
  InputBase,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../../../redux/actions";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

type TodoItemProps = {
  id: number;
  assignedTo?: string;
  completed: boolean;
  tag?: string;
  text: string;
};

export const TodoItem = (props: TodoItemProps) => {
  const { id, assignedTo, text, tag, completed } = props;

  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);
  const [checked, setChecked] = useState(completed);

  const handleEdit = () => setIsEditing(true);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editTodo(id, newText));
    setIsEditing(false);
  };

  const handleToggle = () => {
    setChecked(!checked);
    dispatch(toggleTodo(id));
  };

  const tagButtonColor =
    tag === "Important"
      ? "error"
      : tag === "Morning"
        ? "secondary"
        : tag === "Home"
          ? "success"
          : "primary";

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        margin: 1,
      }}
    >
      <Checkbox
        edge="start"
        checked={checked}
        onChange={handleToggle}
        sx={{ marginRight: 2 }}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* TODO: Make this Box Component reusable */}
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          <Button
            variant="contained"
            color={tagButtonColor}
            sx={{ borderRadius: 30, padding: "5px 30px" }}
          >
            {tag}
          </Button>
          <InputBase
            disabled={!isEditing}
            value={isEditing ? newText : text}
            onChange={handleEditChange}
          />
          <span>
            Assign to: <strong>{assignedTo}</strong>
          </span>
        </Box>
      </Box>
      <Box sx={{ marginLeft: 2, display: "flex", alignItems: "center" }}>
        {isEditing ? (
          <IconButton aria-label="save" onClick={handleEditSubmit}>
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="edit" onClick={handleEdit}>
            <EditIcon />
          </IconButton>
        )}
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => dispatch(removeTodo(id))}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
};
