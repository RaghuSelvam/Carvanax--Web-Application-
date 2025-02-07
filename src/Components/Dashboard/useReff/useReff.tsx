import React, { useState, useRef } from 'react';

const UseRefTest = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
    ref.current += 1;
    console.log('ref.current:', ref.current); // Logs the value of ref after each click
  };

  return (
    <div>
      <h1>useRef Hook Test</h1>
      <p>Count: {count}</p>
      <p>ref.current: {ref.current}</p>
      <button onClick={handleClick}>Increase count</button>
    </div>
  );
};

export default UseRefTest;
