import React, { useState, useCallback } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Calculator.module.css';

export function Calculator() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [years, setYears] = useState('')
  const [total, setTotal] = useState();

  

  const calculatedTotal = Number(total);
  console.log({calculatedTotal})
  return (
    <div>
      <form 
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault()
          console.log(total)
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
      {isNaN(calculatedTotal)
        ? <div>Enter a principal, interest rate, and loan term to calculate a total</div>
        : <div>
            <h2>Calculated Total for Loan:</h2>
            <h1>{calculatedTotal}</h1>
          </div>
      }
    </div>
  );
}
