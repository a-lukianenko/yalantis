import { cloneDeep } from 'lodash';
import { compose } from 'lodash/fp';
import { TEmployee } from 'types/Types';

export type TSortedEmployees = Record<string, TEmployee[]>;

//
const sortedByLastName = (employees: TEmployee[]) =>
  cloneDeep(employees).sort((a, b) => a.lastName.localeCompare(b.lastName));

const groupedAlpha = (employees: TEmployee[]) => {
  return employees.reduce((acc, item) => {
    const firstChar = item.lastName[0].toLocaleLowerCase();
    if (!acc[firstChar]) {
      acc[firstChar] = [];
    }
    acc[firstChar].push(item);
    return acc;
  }, {} as TSortedEmployees);
};
export const sorterLastName = compose(groupedAlpha, sortedByLastName);

//
const sortedByMonth = (employees: TEmployee[]) =>
  cloneDeep(employees).sort((a, b) => {
    const monthA = new Date(a.dob).getMonth();
    const monthB = new Date(b.dob).getMonth();
    return monthA - monthB;
  });

const groupedByMonth = (employees: TEmployee[]) => {
  return employees.reduce((acc, item) => {
    const month = new Date(item.dob).getMonth();
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(item);
    return acc;
  }, {} as TSortedEmployees);
};
export const sorterMonth = compose(groupedByMonth, sortedByMonth);

//
export const regroupByCurrentMonth = () => {
  const months = [...Array(12).keys()];
  const currentMonth = new Date().getMonth();
  const idx = months.indexOf(currentMonth);
  return [...months.slice(idx), ...months.slice(0, idx)];
};
