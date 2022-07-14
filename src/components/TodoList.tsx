import React, { useState } from "react";
interface ITodoList {
  title: string;
  id: number;
  status: boolean;
  onClick: (title: string, id: number) => void;
  toggleTodo: (status: boolean, id: number) => void;
}
const TodoList = ({ title, id, status, onClick, toggleTodo }: ITodoList) => {
  const [currStatus, setCurrStatus] = useState(status);
  const [edit, setEdit] = useState(false);

  const handleFinalDelete = (title: string, id: number) => {
    onClick(title, id);
  };
  const handleToggle = (status: boolean, id: number) => {
    toggleTodo(status, id);
    setCurrStatus(!currStatus);
  };
  const handleEdit = () => {
    setEdit(true);
    console.log("edd");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "red",
          padding: "5px",
          gap: "15px",
          border: "1px solid #111",
          justifyContent: "space-between",
          width: "200px",
          height: "50px",
        }}
      >
        <input
          type="checkbox"
          checked={currStatus}
          onChange={() => handleToggle(status, id)}
        />
        <h4
          contentEditable={edit}
          style={
            currStatus ? { textDecoration: "line-through" } : { color: "#111" }
          }
          onClick={handleEdit}
        >
          {title}
        </h4>
        <button onClick={() => handleFinalDelete(title, id)}>X</button>
      </div>
    </div>
  );
};

export default TodoList;
