import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addTodo, toggleTodo, removeTodo } from '../../redux/actions';
import { Button, Card, CardActions, CardContent, InputBase, Paper } from '@mui/material';
import { StyledInputTodo } from './styled/StyledInputTodo';

const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <>
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
      <ul>
        {todos.map(todo => (
          <Card key={todo.id} sx={{ display: 'inline-block', mr: '10px' }}>
            <CardContent>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            </CardContent>
            <CardActions>
              <Button  variant="outlined" color='error' size='small' onClick={() => dispatch(removeTodo(todo.id))}>
                Delete 
                {/* <DeleteIcon /> */}
              </Button>
            </CardActions>
          </Card>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
