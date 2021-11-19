import React from "react";
const Departments = (props) => {
  const renderDepartments = () => {
    return props.departments.map((department) => {
      return (
        <div>
          <h1>{department.name}</h1> 
        </div>
      );
    });
  };
  return (
    <div>
      <a href = "/">Home</a>
      <a href = "/departments/new">New Department</a>
      {/* {renderDepartments()} */}
    </div>
  );
};


// const Departments = (props) =>{
//   const {departments} = props;
//   const renderDepartment = (department) =>{
//     return (
//       <div>
//         <h1>{department.name}</h1>
//       </div>
//     );
//   };
//   const renderDepartments = () => {
//     return departments.map((department) => {
//       return renderDepartment(department);
//     });
//   };
//   return (
//     <div>
//       <h1>Departments here {department.length}</h1>
//       <a href='/departments/new'>New Department</a>
//       {renderDepartments()}
//     </div>
//   )
// }
export default Departments;