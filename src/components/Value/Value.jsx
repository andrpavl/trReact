import css from '../Counter/Counter.module.css';

export const Value = ({ value }) => (
  <div>
    <span className={css.CounterValue}>{value}</span>
  </div>
);
