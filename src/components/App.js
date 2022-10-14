import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [stateTasks, setStateTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  function handleDelete(name) {
    const revisedList = stateTasks.filter(task => task.text !== name)
    setStateTasks(revisedList)
  }

  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoryClick={setSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm />
      <TaskList tasks={stateTasks} onDelete={handleDelete} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
