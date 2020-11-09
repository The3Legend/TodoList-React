import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/todo-list";
import InputSerch from './components/input-serch'
import TaskList from './components/task-list'
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
