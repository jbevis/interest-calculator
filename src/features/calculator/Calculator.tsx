import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setCalculated
} from './calculatorSlice';
import styles from './Calculator.module.css';

export interface InterestData {
  initial: string,
  rate: string,
  years: string
}

export function Calculator() {
  const calculated = useAppSelector(setCalculated);
  const dispatch = useAppDispatch();
  const [initial, setInitial] = useState('')
  const [rate, setRate] = useState('')
  const [years, setYears] = useState('')

  const convertStringToNum = (string: string) => Number(string);
  const calculateInterest = (data: InterestData) => {
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

  return (
    <div>
      <form 
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          dispatch(setCalculated(calculateInterest({initial, rate, years})))
        }}>
        <div className={styles.column}>
          <label>Principal ($)</label>
          <span className={styles.row}>
            <input
              className={styles.textbox}
              aria-label="Set Principal"
              value={initial}
              placeholder='5,000'
              onChange={(e) => setInitial(e.target.value)}
            />
          </span>
        </div>
        <div className={styles.column}>
          <label>Rate (%)</label>
          <span className={styles.row}>
            <input
              className={styles.textbox}
              aria-label="Set Interest Rate"
              value={rate}
              placeholder='2.5'
              onChange={(e) => setRate(e.target.value)}
            />
          </span>
        </div>
        <div className={styles.column}>
          <label>Loan Term (years)</label>
          <div className={styles.row}>
            <input
              className={styles.textbox}
              aria-label="Set Term"
              value={years}
              placeholder='5'
              onChange={(e) => setYears(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <button className={styles.button} type='submit'>Calculate</button>
        </div>
      </form>
      {isNaN(calculated.payload.calculator.calculated)
        ? <div>Enter a principal, interest rate, and loan term to calculate a total</div>
        : <div>
            <h2>Calculated Total for Loan:</h2>
            
            <h1>${calculated.payload.calculator.calculated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
          </div>
      }
    </div>
  );
}
