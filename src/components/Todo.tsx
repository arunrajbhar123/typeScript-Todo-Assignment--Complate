import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
export interface ITodo {
  id: number;
  title: string;
  status: boolean;
}
const Todo = () => {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const handleInput = (title: string) => {
    const payload = {
      title,
      id: todo.length + 1,
      status: false,
    };
    setTodo([...todo, payload]);
  };
  const DeleteTodo = (value: string, id: number) => {
    let newTodo = todo.filter((t) => t.id !== id);
    setTodo(newTodo);
  };

  const toggleTodo = (status: boolean, id: number) => {
    const newTodo = todo.find((t) => {
      if (t.id === id) {
        t.status = !status;
      }
      setTodo(todo);
      
    });
    
  };
  return (
    <div>
      <h1>Todo</h1>
      <TodoInput onClick={handleInput} />
      {todo.length > 0 &&
        todo.map((item) => {
          return (
            <TodoList
              key={item.id}
              {...item}
              onClick={DeleteTodo}
              toggleTodo={toggleTodo}
            />
          );
        })}
    </div>
  );
};

export default Todo;
