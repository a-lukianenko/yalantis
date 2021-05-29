import {
  employeesSelector,
  employeesSortedLastNameSelector,
  fetchEmployees,
} from 'features/employees/employeesSlice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import englishAlphabet from 'helpers/enlgish';
import { AlphabeticView } from './components/AlphaBeticView';
import { BirthdayDisplay } from './components/BirthdayDisplay';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export const Employees = () => {
  const employees = useAppSelector(employeesSelector);
  const employeesSortedLastName = useAppSelector(
    employeesSortedLastNameSelector
  );
  const dispatch = useAppDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('employees', JSON.stringify(employees));
    });
  }, [employees]);

  return (
    <div className={classes.container}>
      <AlphabeticView
        alphabet={englishAlphabet}
        groupedData={employeesSortedLastName}
      />
      <BirthdayDisplay />
    </div>
  );
};
