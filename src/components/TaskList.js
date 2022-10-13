import React from "react";
// import { TASKS } from "../data";
import Task from './Task'


function TaskList(props) {

  const theList = props.tasks.map((task, index) => (
  <Task key={index} task={task.text} category={task.category} onDelete={props.onDelete} />
  ))
  return (
    <div className="tasks">
        {theList}
    </div>
  );
}

export default TaskList;
