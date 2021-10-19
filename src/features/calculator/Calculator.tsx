import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  setCalculated
} from './calculatorSlice';
import { calculateInterest } from '../../utils/utils';
import styles from './Calculator.module.css';

export function Calculator() {
  const calculated = useAppSelector(setCalculated);
  const dispatch = useAppDispatch();
  const [initial, setInitial] = useState('')
  const [rate, setRate] = useState('')
  const [years, setYears] = useState('')

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
      {calculated.payload.calculator.value === 0 || isNaN(calculated.payload.calculator.value)
        ? <div>Enter a principal, interest rate, and loan term to calculate a total</div>
        : <div>
            <h2>Calculated Total for Loan:</h2>
            
            <h1>${calculated.payload.calculator.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
          </div>
      }
    </div>
  );
}
