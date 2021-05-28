import { useAppSelector } from "app/hooks";
import { selectedEmployeesSelector } from "features/employees/employeesSlice";
import { EmployeeBD } from "../EmployeeBD";

export const BirthdayDisplay = () => {
  const selectedEmployees = useAppSelector(selectedEmployeesSelector);
  console.log("from Birthday", { selectedEmployees });

  return (
    <div>
      <h3>Employees birthdays</h3>
      {selectedEmployees.map(employee => {
        return <EmployeeBD employee={employee} key={employee.id} />;
      })}
    </div>
  );
};
