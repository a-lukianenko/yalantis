import { cloneDeep } from "lodash";
import { compose } from "lodash/fp";
import { TEmployee } from "types/Types";

export type TSortedEmployees = Record<string, TEmployee[]>;

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

export const sorter = compose(groupedAlpha, sortedByLastName);
