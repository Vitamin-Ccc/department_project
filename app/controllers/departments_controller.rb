class DepartmentsController < ApplicationController
  def index
    render component: "Departments", props: {departments: Department.all}
  end

  def create
    @department = Department.new(department_params)

    if @department.save
      redirect_to root_path
    else
      render component: "NewDepartment", props: { department: @department}
    end
  end

private

  def departments_params
    params.require(:department).permit(:name, :description)
  end
end
