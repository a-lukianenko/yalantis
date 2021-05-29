import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TEmployee } from 'types/Types';
import { RootState } from 'app/store';

type TEmployeeSlice = {
  employees: TEmployee[];
};

const initialState: TEmployeeSlice = {
  employees:
    (JSON.parse(localStorage.getItem('employees')!) as TEmployee[]) || [],
};

export const fetchEmployees = createAsyncThunk(
  'employees/fetchByIdStatus',
  async () => {
    if (localStorage.getItem('employees')) {
      return JSON.parse(localStorage.getItem('employees')!);
    } else {
      const response = await axios.get(process.env.REACT_APP_API as string);
      return response.data as TEmployee[];
    }
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    selectEmployee: (state, action: PayloadAction<TEmployee>) => {
      state.employees.find(
        (employee) => employee.id === action.payload.id
      )!.status = 'active';
    },
    deselectEmployee: (state, action: PayloadAction<TEmployee>) => {
      state.employees.find(
        (employee) => employee.id === action.payload.id
      )!.status = 'inactive';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action: PayloadAction<TEmployee[]>) => {
        if ('status' in action.payload[0]) {
          state.employees = action.payload;
        } else {
          const withStatus = action.payload.map((employee) => {
            employee.status = 'inactive';
            return employee;
          });
          state.employees = withStatus;
        }
      }
    );
  },
});

// action creators
export const { selectEmployee, deselectEmployee } = employeesSlice.actions;

//selectors
export const employeesSelector = (state: RootState) =>
  state.employees.employees;
export const selectedEmployeesSelector = (state: RootState) =>
  state.employees.employees.filter((employee) => employee.status === 'active');

// reducer
export default employeesSlice.reducer;
