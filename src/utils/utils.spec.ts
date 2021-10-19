import { convertStringToNum, calculateInterest } from "./utils";

describe('utils', () => {
  const expectedInterest = 5625

  it('should calculate interest', () => {
    expect(calculateInterest({ initial: '5000', rate: '2.5', years: '5' })).toEqual(expectedInterest)
  })

  it('should convert a string to a number', () => {
    expect(convertStringToNum('5')).toEqual(5)
  })
})
