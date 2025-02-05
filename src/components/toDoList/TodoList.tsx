import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TodoInput } from "./todoItems/TodoInput";
import { TodoItem } from "./todoItems/ToDoItem";
import { StyledTodoList } from "./styled/StyledToDoList";
import { CompletedTodo } from "../completedToDos/CompletedToDo";
import Divider from "@mui/material/Divider";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <>
      <StyledTodoList>
        <TodoInput />

        {activeTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            tag={todo.tag}
            assignedTo={todo.assignedTo}
          />
        ))}

        {completedTodos.length > 0 && (
          // TODO: Divider is not showing up
          <Divider textAlign="center" sx={{ my: 2, fontSize: "14px", fontWeight: "bold", color: "black" }}>
            Completed Tasks
          </Divider>
        )}

        {completedTodos.map((todo) => (
          <CompletedTodo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            tag={todo.tag}
            assignedTo={todo.assignedTo}
          />
        ))}
      </StyledTodoList>
    </>
  );
};

export default TodoList;
