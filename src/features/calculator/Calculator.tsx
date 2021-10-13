import React, { useState, useCallback } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './calculatorSlice';
import styles from './Calculator.module.css';

export interface InterestData {
  principal: string,
  rate: string,
  years: string
}

export function Calculator() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [years, setYears] = useState('')
  const [total, setTotal] = useState(0);

  const convertStringToNum = (string: string) => Number(string);
  const calculateInterest = (data: InterestData) => {
    console.log(typeof Number(data.principal))
    if (isNaN(Number(data.principal)) || isNaN(Number(data.rate)) || isNaN(Number(data.years))) {
      console.error('Could not calculate with invalid entry.')
      return null
    }
    const principal = convertStringToNum(data.principal)
    const rate = convertStringToNum(data.rate) / 100
    const years = convertStringToNum(data.years)
    const calculatedTotal = principal * (1 + (rate * years))
    
    setTotal(calculatedTotal)
  }

  return (
    <div>
      <form 
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          calculateInterest({principal, rate, years})
        }}>
        <div className={styles.column}>
          <label>Principal ($)</label>
          <span className={styles.row}>
            <input
              className={styles.textbox}
              aria-label="Set Principal"
              value={principal}
              placeholder='5,000'
              onChange={(e) => setPrincipal(e.target.value)}
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
      {isNaN(total)
        ? <div>Enter a principal, interest rate, and loan term to calculate a total</div>
        : <div>
            <h2>Calculated Total for Loan:</h2>
            
            <h1>${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
          </div>
      }
    </div>
  );
}
