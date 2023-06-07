import { Component } from 'react';
import css from './Counter.module.css';
import { Controls } from 'components/Controls/Controls';
import { Value } from '../Value/Value';

export class Counter extends Component {
  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return { value: (prevState.value += 1) };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => {
      return { value: (prevState.value -= 1) };
    });
  };
  render() {
    return (
      <div className={css.Counter}>
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
