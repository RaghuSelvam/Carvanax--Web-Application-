import React, { useEffect } from 'react';

const TestComponent = () => {
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return <div>Test Component</div>;
};

export default TestComponent;
