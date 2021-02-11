import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterApp.propTypes = {};

function CounterApp(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  function handleIncreaseClick() {
    const action = increase(); // action creator
    dispatch(action);
  }

  function handleDecreaseClick() {
    const action = decrease(); // action creator
    dispatch(action);
  }

  return (
    <div>
      Counter: {counter}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterApp;
