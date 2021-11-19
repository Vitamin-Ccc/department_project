import React from "react";

const Department = (props) => {
  return(
    <div>
      <h1>{props.department.name}</h1>
      <p>{props.department.description}</p>
      <a href = "/">Home</a>
      <a href = "/departments">Departments</a>
    </div>
  );
};

export default Department;