import React, { useState } from "react";
import { TEmployee } from "types/Types";
import { createUseStyles } from "react-jss";
import { useAppDispatch } from "app/hooks";
import {
  deselectEmployee,
  selectEmployee,
} from "features/employees/employeesSlice";

// Types
type TProps = {
  employee: TEmployee;
};

type TStatus = "active" | "inactive";

// styles
const useStyles = createUseStyles(theme => ({
  employeeName: {
    fontWeight: "bold",
    color: "blue",
  },
}));

export const Employee = ({ employee }: TProps) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState<TStatus>("inactive");

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log({ value });

    if (value === "active") {
      dispatch(selectEmployee(employee));
    } else {
      dispatch(deselectEmployee(employee));
    }
    setStatus(e.target.value as TStatus);
  };

  const { firstName, lastName } = employee;
  return (
    <div>
      <span className={status === "active" ? classes.employeeName : ""}>
        {firstName} {lastName}
      </span>
      <form>
        <label>
          Active
          <input
            type='radio'
            name='status'
            value='active'
            checked={status === "active"}
            onChange={onStatusChange}
          />
        </label>
        <label>
          Not active
          <input
            type='radio'
            name='status'
            value='inactive'
            checked={status === "inactive"}
            onChange={onStatusChange}
          />
        </label>
      </form>
    </div>
  );
};
