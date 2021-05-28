import { TEmployee } from "types/Types";

type IProps = {
  employee: TEmployee;
};

export const EmployeeBD = ({ employee }: IProps) => {
  const { firstName, lastName, dob } = employee;
  return (
    <div>
      {firstName} {lastName} {dob}
    </div>
  );
};
