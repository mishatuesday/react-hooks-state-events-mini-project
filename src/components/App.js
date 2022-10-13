import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [stateTasks, setStateTasks] = useState(TASKS)

  function handleDelete(name) {
    const revisedList = stateTasks.filter(task => task.text !== name)
    setStateTasks(revisedList)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={stateTasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
