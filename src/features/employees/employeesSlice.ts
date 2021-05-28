import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TEmployee } from "types/Types";
import { set } from "lodash/fp";
import { RootState } from "app/store";

type TEmployeeSlice = {
  employees: TEmployee[];
};

const initialState: TEmployeeSlice = {
  employees: [],
};

export const fetchEmployees = createAsyncThunk(
  "employees/fetchByIdStatus",
  async () => {
    const response = await axios.get(process.env.REACT_APP_API as string);
    return response.data as TEmployee[];
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action: PayloadAction<TEmployee[]>) => {
        return set("employees")(action.payload)(state);
      }
    );
  },
});

export const employeesSelector = (state: RootState) =>
  state.employees.employees;
export default employeesSlice.reducer;
