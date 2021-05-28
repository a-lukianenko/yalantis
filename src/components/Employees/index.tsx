import {
  employeesSelector,
  fetchEmployees,
} from "features/employees/employeesSlice";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { sorter } from "helpers/sorter";
import englishAlphabet from "helpers/enlgish";
import { AlphabeticView } from "./components/AlphaBeticView";
import { BirthdayDisplay } from "./components/BirthdayDisplay";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

export const Employees = () => {
  const employees = useAppSelector(employeesSelector);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const sortedEmployees = useMemo(() => sorter(employees), [employees]);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <AlphabeticView
        alphabet={englishAlphabet}
        groupedData={sortedEmployees}
      />
      <BirthdayDisplay />
    </div>
  );
};
