import { useAppSelector } from 'app/hooks';
import { selectedEmployeesGroupedByMonthSelector } from 'features/employees/employeesSlice';
import { regroupByCurrentMonth } from 'helpers/sorter';
import { keys } from 'lodash/fp';
import { EmployeeBDList } from '../EmployeeBD';

export const BirthdayDisplay = () => {
  const groupedEmployees = useAppSelector(
    selectedEmployeesGroupedByMonthSelector
  );

  if (keys(groupedEmployees).length < 1) {
    return (
      <div>
        <h3>Employees List is empty</h3>
      </div>
    );
  }

  const getMonthName = (d: string | Date) => {
    const currentMonth = new Date().getMonth();
    const dateMonth = new Date(d).getMonth();
    const monthName = new Date(d).toLocaleString('default', {
      month: 'long',
    });

    return currentMonth === dateMonth ? monthName + ' (current)' : monthName;
  };

  return (
    <div>
      <h3>Employees birthdays</h3>
      {regroupByCurrentMonth().map((month) => {
        const list = groupedEmployees[month];
        return (
          <div key={month.toString()}>
            <h3>{list && getMonthName(list[0].dob)} </h3>
            {list && <EmployeeBDList employees={list} />}
          </div>
        );
      })}
    </div>
  );
};
