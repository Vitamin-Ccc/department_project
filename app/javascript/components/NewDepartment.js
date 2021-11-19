import React from "react";
const NewDepartment = () => {
  return (
    <div>
      <h1>New Department</h1>
      <form>
        <p>Name: </p>
        <input/>
        <p>Description: </p>
        <input/>
        <br/>
        <button type = "submit">Add</button>
      </form>
    </div>
  );
};
export default NewDepartment;