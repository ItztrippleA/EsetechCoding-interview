import React from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
function FilterResultContainer() {
  return (
    <div className="result-div">
      <div className="result-title">
        <h1>Filter Results</h1>
      </div>
      <div className="filterInput">
        <span className="inputHeader"> Name (contains)</span>
        <input
          type="text"
          name="name"
          id="name"
          className="nameInput"
          placeholder="Text String"
        />
      </div>
      <div className="orderBy">
        <span className="inputHeader">Order By</span>
        <div className="dropDownContainer">
          <FiArrowUp className="dropDownIcon" />
          <div className="dropDown">
            <select className="orderBySelect">
              <option value="name">.</option>
              <option value="name">Name</option>
              <option value="age">Age</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterResultContainer;
