import React, { useState } from "react";
interface ITodoInput {
  onClick: (value:string) => void; 
}
const TodoInput = ({ onClick }: ITodoInput) => {
  const [text, setText] = useState<string>("");

  
  const handleAddTask: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };
  const handlePostTask: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (text !== "") {
      onClick(text);
      setText("")
    }
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Enter Task"
        onChange={handleAddTask}
      />
      <button onClick={handlePostTask}>Add</button>
    </div>
  );
};

export default TodoInput;
