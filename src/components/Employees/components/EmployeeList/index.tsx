import { TEmployee } from 'types/Types';
import { Employee } from '../Employee';

type IProps = {
  employees: TEmployee[];
};

export const EmployeeList = ({ employees }: IProps) => {
  const list = employees.map((employee) => (
    <Employee employee={employee} key={employee.id} />
  ));
  return <div>{list}</div>;
};
