import React from "react";
// import { TASKS } from "../data";
import Task from './Task'


function TaskList(props) {
  // if (props.tasks[0].category === props.selectedCategory) 
  const theFilter = 
  // add ternary to get 'All' working
  (props.selectedCategory==="All") ?
    props.tasks
  :
  // if category is not 'All' then apply filter
    props.tasks.filter((task) => {
    return task.category===props.selectedCategory
  })
  const theList = theFilter.map((task, index) => (
  <Task key={index} task={task.text} category={task.category} onDelete={props.onDelete} />
  ))
  return (
    <div className="tasks">
        {theList}
    </div>
  );
}

export default TaskList;
