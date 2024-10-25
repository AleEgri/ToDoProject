import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addTodo, toggleTodo, removeTodo } from '../../redux/actions';
import { Button, Card, CardActions, CardContent} from '@mui/material';
import { TodoInput } from './todoItems/TodoInput';
import { TodoItem } from './todoItems/ToDoItem';

const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo}/>
      <ul>
        {todos.map(todo => (
          <TodoItem
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
