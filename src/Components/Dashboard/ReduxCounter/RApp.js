// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './redux/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React Redux Counter</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default App;/* App.css */
// .App {
//   text-align: center;
//   margin-top: 50px;
// }

// button {
//   margin: 10px;
//   padding: 10px 20px;
//   font-size: 16px;
// }

// 2 nd uh 