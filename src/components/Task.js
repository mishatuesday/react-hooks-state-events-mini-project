import React from "react";

function Task(props) {

  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.task}</div>
      <button className="delete" onClick={e => props.onDelete(props.task)}>X</button>
    </div>
  );
}

export default Task;
