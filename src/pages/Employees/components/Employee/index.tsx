import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames/bind';
import { TEmployee } from 'types/Types';
import { useAppDispatch } from 'app/hooks';

// actions
import {
  deselectEmployee,
  selectEmployee,
} from 'features/employees/employeesSlice';

// components
import { RadioInput } from './components/RadioInput';

// Types
type TProps = {
  employee: TEmployee;
};
type TStatus = 'active' | 'inactive';

// styles
const useStyles = createUseStyles((theme) => ({
  employeeName: {
    fontWeight: 'bold',
    color: 'blue',
  },
  card: {
    padding: 10,
    marginBottom: 8,
    borderRadius: 6,
    boxShadow: '0 1px 6px 0 rgb(32 33 36 / 28%)',
  },
}));

export const Employee = ({ employee }: TProps) => {
  const classes = useStyles();
  let cx = classNames.bind(classes);
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<TStatus>(employee.status as TStatus);

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    value === 'active'
      ? dispatch(selectEmployee(employee))
      : dispatch(deselectEmployee(employee));

    setStatus(e.target.value as TStatus);
  };

  const { firstName, lastName } = employee;
  const className = cx({ employeeName: status === 'active' });

  return (
    <div className={classes.card}>
      <span className={className}>
        {firstName} {lastName}
      </span>
      <form>
        <RadioInput
          labelTitle="Active"
          name="status"
          value="active"
          isChecked={status === 'active'}
          onChange={onStatusChange}
        />
        <RadioInput
          labelTitle="Not active"
          name="status"
          value="inactive"
          isChecked={status === 'inactive'}
          onChange={onStatusChange}
        />
      </form>
    </div>
  );
};
