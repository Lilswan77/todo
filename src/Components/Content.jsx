import { useState } from "react";

const createInitialTodos = () => {
  const initialTodos = [];
  return initialTodos;
};

export const App = () => {
  const [todos, setTodos] = useState(createInitialTodos());
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="parent-box">
      <div className="content-box">
        <form onSubmit={handleSubmit}>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button
            onClick={() => {
              setText("");
              setTodos([{ id: todos.length, text: text }, ...todos]);
            }}
          >
            Add
          </button>
        </form>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
              </ul>
              <h1>Hello world</h1>
      </div>
    </div>
  );
};

export default App;
