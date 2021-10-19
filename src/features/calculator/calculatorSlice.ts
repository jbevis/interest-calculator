import { createSlice } from '@reduxjs/toolkit';

export interface CalculatorState {
  calculated: number
}

const initialState: CalculatorState = {
  calculated: 0
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: { 
    setCalculated: (state, action) => {
      console.log({state, action})
      state.calculated = action.payload
    }
  }
});

export const { 
  setCalculated
 } = calculatorSlice.actions;

export default calculatorSlice.reducer;
