import React, { useState } from 'react';
import { TEmployee } from 'types/Types';
import { createUseStyles } from 'react-jss';
import { useAppDispatch } from 'app/hooks';
import {
  deselectEmployee,
  selectEmployee,
} from 'features/employees/employeesSlice';
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
}));

export const Employee = ({ employee }: TProps) => {
  const classes = useStyles();
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
  return (
    <div>
      <span className={status === 'active' ? classes.employeeName : ''}>
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
