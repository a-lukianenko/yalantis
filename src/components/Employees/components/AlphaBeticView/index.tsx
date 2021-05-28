import { TSortedEmployees } from "helpers/sorter";
import { EmployeeList } from "../EmployeeList";

type IProps = {
  alphabet: string[];
  groupedData: TSortedEmployees;
};
export const AlphabeticView = ({ alphabet, groupedData }: IProps) => {
  return (
    <div>
      <h3>Employees</h3>
      {alphabet.map(letter => {
        const list = groupedData[letter];
        return (
          <div key={letter}>
            <h3>{letter.toUpperCase()}</h3>
            {list ? <EmployeeList employees={groupedData[letter]} /> : "******"}
          </div>
        );
      })}
    </div>
  );
};
