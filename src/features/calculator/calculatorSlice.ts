import { createSlice } from '@reduxjs/toolkit';

export interface CalculatorState {
  value: number
}

const initialState: CalculatorState = {
  value: 0
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: { 
    setCalculated: (state, action) => {
      state.value = action.payload
    }
  }
});

export const { 
  setCalculated
 } = calculatorSlice.actions;

export default calculatorSlice.reducer;
