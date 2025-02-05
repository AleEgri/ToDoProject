import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { StyledInputTodo } from "../styled/StyledInputTodo";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/actions";
import { useState } from "react";

export const TodoInput = () => {
  const [selectedTagValue, setSelectedTagValue] = useState("Work");
  const [selectedUserValue, setSelectedUserValue] = useState("Myself");
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo(selectedUserValue, selectedTagValue, newTodo));
      setNewTodo("");
    }
  };

  const handleTagChange = (event: SelectChangeEvent) => {
    setSelectedTagValue(event.target.value as string);
  };

  const handleUserChange = (event: SelectChangeEvent) => {
    setSelectedUserValue(event.target.value as string);
  };

  const tagOptions = [
    { value: "Home", label: "Home" },
    { value: "Work", label: "Work" },
    { value: "Important", label: "Important" },
    { value: "Morning", label: "Morning" },
  ];

  const assignUsers = [
    { value: "Myself", label: "Myself" },
    { value: "Jack", label: "Jack" },
    { value: "John", label: "John" },
    { value: "Rosa", label: "Rosa" },
  ];

  return (
    <StyledInputTodo>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="tag-select-label">Tag</InputLabel>
        <Select
          labelId="tag-select-label"
          id="tag-select"
          value={selectedTagValue}
          label="Tag"
          onChange={handleTagChange}
          sx={{ bgcolor: "#fff" }}
        >
          {tagOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add a new to-do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </Paper>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="user-select-label">Assign To</InputLabel>
        <Select
          labelId="user-select-label"
          id="user-select"
          value={selectedUserValue}
          label="User"
          onChange={handleUserChange}
          sx={{ bgcolor: "#fff" }}
        >
          {assignUsers.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="success" onClick={handleAddTodo}>
        Add To-Do
      </Button>
    </StyledInputTodo>
  );
};
