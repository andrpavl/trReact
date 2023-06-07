import { Counter } from './Counter/Counter';
import css from './Counter/Counter.module.css'

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4caf50' },
//   { label: 'blue', color: '#2196f3' },
//   { label: 'grey', color: '#607d8b' },
//   { label: 'pink', color: '#e91e63' },
//   { label: 'indigo', color: '#3f51b5' },
// ];

export const App = () => {
  return (
    <>
      <h1 className={css.h1}>Стан компонента</h1>
      <Counter initialValue={0 } />
    </>
  );
};
