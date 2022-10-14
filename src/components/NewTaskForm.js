import React from "react";

function NewTaskForm({categories, newTaskName, setNewTaskName, setNewTaskCategory, submitForm}) {
  const settableCategories = categories.filter(category => (category !== "All"))
  return (
    <form className="new-task-form" onSubmit={e => submitForm(e)}>
      <h3>Add a New Task:</h3><br />
      <label>
        Details
        <input type="text" name="text" value={newTaskName} onChange={e => setNewTaskName(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={e => setNewTaskCategory(e.target.value)}>
          {settableCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
