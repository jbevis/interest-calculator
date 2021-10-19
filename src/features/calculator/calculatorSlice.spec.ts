import calculatorReducer, {
  setCalculated,
} from './calculatorSlice';

describe('calculator reducer', () => {
  const initialState = {
    value: 0
  };
  it('should handle initial state', () => {
    expect(calculatorReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
    });
  });

  it('should handle setCalculated', () => {
    const actual = calculatorReducer(initialState, setCalculated(4));
    expect(actual.value).toEqual(4);
  });
});
