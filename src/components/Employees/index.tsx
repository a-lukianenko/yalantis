import {
  employeesSelector,
  fetchEmployees,
} from "features/employees/employeesSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Employee } from "./components/Employee";

export const Employees = () => {
  const employees = useAppSelector(employeesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div>
      {employees.map(employee => {
        return <Employee employee={employee} key={employee.id} />;
      })}
    </div>
  );
};
