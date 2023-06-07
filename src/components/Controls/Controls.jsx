import css from '../Counter/Counter.module.css';
import React from 'react';

export const Controls = ({ onIncrement, onDecrement }) => (
  <div className={css.Counter}>
    <button className={css.btn} type="button" onClick={onIncrement}>
      Додати 1
    </button>
    <button className={css.btn} type="button" onClick={onDecrement}>
      Відняти 1
    </button>
  </div>
);


