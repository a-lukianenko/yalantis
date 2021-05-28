import {
  employeesSelector,
  fetchEmployees,
} from "features/employees/employeesSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";

export const Employees = () => {
  const employees = useAppSelector(employeesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <ul>
      {employees.map(employee => {
        return (
          <li key={employee.id}>
            {employee.id}. {employee.firstName} {employee.lastName} -{" "}
            {employee.dob}
          </li>
        );
      })}
    </ul>
  );
};
