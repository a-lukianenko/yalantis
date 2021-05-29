import { TEmployee } from 'types/Types';

type IProps = {
  employees: TEmployee[];
};

export const EmployeeBDList = ({ employees }: IProps) => {
  return (
    <div>
      {employees.map((employee) => {
        const { id, firstName, lastName, dob } = employee;
        return (
          <div key={id}>
            {firstName} {lastName} {dob}
          </div>
        );
      })}
    </div>
  );
};
