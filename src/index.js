import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  return <h1>My Todo List</h1>;
};
const InputSerch = () => {
  return <input placeholder="serch" />;
};

const TaskList = () => {
  return (
    <ul>
      <li>Drink Coffe</li>
      <li>Build Awesome App</li>
    </ul>
  );
};


const App = () => {
  return (
    <div>
      <TodoList />
      <InputSerch />
      <TaskList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
