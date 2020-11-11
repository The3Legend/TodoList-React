import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/todo-list";
import InputSerch from "./components/input-serch";
import TaskList from "./components/task-list";
const App = () => {
  const TodoData = [
    { label: "Drink Coffe", important: false },
    { label: "Make Awesome App", important: true },
    { label: "Have a lunch", important: false },
  ];

  return (
    <div>
      <TodoList />
      <InputSerch />
      <TaskList todos = {TodoData}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
