import {
  employeesSelector,
  fetchEmployees,
} from "features/employees/employeesSlice";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { sorter } from "helpers/sorter";
import englishAlphabet from "helpers/enlgish";
import { AlphabeticView } from "./components/AlphaBeticView";

export const Employees = () => {
  const employees = useAppSelector(employeesSelector);
  const dispatch = useAppDispatch();

  const sortedEmployees = useMemo(() => sorter(employees), [employees]);
  console.log(sortedEmployees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div>
      <AlphabeticView
        alphabet={englishAlphabet}
        groupedData={sortedEmployees}
      />
    </div>
  );
};
