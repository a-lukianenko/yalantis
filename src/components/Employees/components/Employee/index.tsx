import React, { useState } from "react";
import { TEmployee } from "types/Types";
import { createUseStyles } from "react-jss";

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
  const [status, setStatus] = useState<TStatus>("inactive");

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as TStatus);
  };

  const { firstName, lastName, dob } = employee;
  return (
    <div>
      <span className={status === "active" ? classes.employeeName : ""}>
        {firstName} {lastName} - {dob}
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
