import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TEmployee } from 'types/Types';
import { filter, set } from 'lodash/fp';
import { RootState } from 'app/store';

type TEmployeeSlice = {
  employees: TEmployee[];
  selectedEmployees: TEmployee[];
};

const initialState: TEmployeeSlice = {
  employees: [],
  selectedEmployees: [],
};

export const fetchEmployees = createAsyncThunk(
  'employees/fetchByIdStatus',
  async () => {
    const response = await axios.get(process.env.REACT_APP_API as string);
    return response.data as TEmployee[];
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    selectEmployee: (state, action: PayloadAction<TEmployee>) => {
      state.selectedEmployees.push(action.payload);
    },
    deselectEmployee: (state, action: PayloadAction<TEmployee>) => {
      state.selectedEmployees = state.selectedEmployees.filter(
        (employee) => employee.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action: PayloadAction<TEmployee[]>) => {
        state.employees = action.payload;
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
  state.employees.selectedEmployees;

// reducer
export default employeesSlice.reducer;
