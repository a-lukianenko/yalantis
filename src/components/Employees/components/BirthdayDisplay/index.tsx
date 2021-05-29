import { useAppSelector } from 'app/hooks';
import { selectedEmployeesGroupedByMonthSelector } from 'features/employees/employeesSlice';
import { regroupByCurrentMonth } from 'helpers/sorter';
import { EmployeeBDList } from '../EmployeeBD';

export const BirthdayDisplay = () => {
  const groupedEmployees = useAppSelector(
    selectedEmployeesGroupedByMonthSelector
  );

  if (Object.keys(groupedEmployees).length < 1) {
    return (
      <div>
        <h3>Employees List is empty</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Employees birthdays</h3>
      {regroupByCurrentMonth().map((month) => {
        const list = groupedEmployees[month];
        return (
          <div key={month.toString()}>
            <h3>
              {list &&
                new Date(list[0].dob).toLocaleString('default', {
                  month: 'long',
                })}
            </h3>
            {list && <EmployeeBDList employees={list} />}
          </div>
        );
      })}
    </div>
  );
};
