export type TEmployee = {
  id: string | number;
  firstName: string;
  lastName: string;
  dob: Date | string;
  status?: 'active' | 'inactive';
};
