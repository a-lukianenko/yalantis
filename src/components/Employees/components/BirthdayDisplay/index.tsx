import { useAppSelector } from 'app/hooks';
import { selectedEmployeesSelector } from 'features/employees/employeesSlice';
import { sorterMonth } from 'helpers/sorter';
import { EmployeeBDList } from '../EmployeeBD';

const months = [...Array(12).keys()];

export const BirthdayDisplay = () => {
  const selectedEmployees = useAppSelector(selectedEmployeesSelector);
  if (selectedEmployees.length < 1) {
    return (
      <div>
        <h3>Employees List is empty</h3>
      </div>
    );
  }

  const groupedByMonth = sorterMonth(selectedEmployees);
  for (const key in groupedByMonth) {
    groupedByMonth[key].sort((a, b) => a.lastName.localeCompare(b.lastName));
  }
  const currentMonth = new Date().getMonth();
  const idx = months.indexOf(currentMonth);
  const regroupedMonths = [...months.slice(idx), ...months.slice(0, idx)];

  if (selectedEmployees.length < 1) {
    return (
      <div>
        <h3>Employees List is empty</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Employees birthdays</h3>
      {regroupedMonths.map((month) => {
        const list = groupedByMonth[month];
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
