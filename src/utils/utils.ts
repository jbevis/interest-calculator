export interface InterestData {
  initial: string,
  rate: string,
  years: string
}

export const convertStringToNum = (string: string) => Number(string);

export const calculateInterest = (data: InterestData) => {
  if (isNaN(Number(data.initial)) || isNaN(Number(data.rate)) || isNaN(Number(data.years))) {
    console.error('Could not calculate with invalid entry.')
    return null
  }
  const principal = convertStringToNum(data.initial)
  const rate = convertStringToNum(data.rate) / 100
  const years = convertStringToNum(data.years)
  const calculatedTotal = principal * (1 + (rate * years))
  
  return calculatedTotal
}
