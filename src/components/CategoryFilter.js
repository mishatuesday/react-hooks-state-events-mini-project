import React from "react";

function CategoryFilter(props) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {props.categories.map(category => (
        <button key={category} onClick={e => props.categoryClick(category)} className={category===props.selectedCategory ? "selected" : ""}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
