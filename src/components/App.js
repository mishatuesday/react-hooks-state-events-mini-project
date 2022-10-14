import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [stateTasks, setStateTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [newTaskName, setNewTaskName] = useState("")
  const [newTaskCategory, setNewTaskCategory] = useState("Misc")

  function handleDelete(name) {
    const revisedList = stateTasks.filter(task => task.text !== name)
    setStateTasks(revisedList)
  }

  function submitForm(e) {
    e.preventDefault()
    setStateTasks([
      ...stateTasks,
      {text: newTaskName,
      category: newTaskCategory}
    ])
    setNewTaskName("")
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoryClick={setSelectedCategory} selectedCategory={selectedCategory}/>
      <TaskList tasks={stateTasks} onDelete={handleDelete} selectedCategory={selectedCategory}/>
      <NewTaskForm submitForm={submitForm} categories={CATEGORIES} newTaskName={newTaskName} setNewTaskName={setNewTaskName} newTaskCategory={newTaskCategory} setNewTaskCategory={setNewTaskCategory} />
    </div>
  );
}

export default App;
