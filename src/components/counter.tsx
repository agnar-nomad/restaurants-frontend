'use client';

import { useState } from 'react';
import { Button } from './ui/button.js';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((c) => c + 1);

  return (
    <section>
      <div>Count: {count}</div>
      <Button onClick={handleIncrement}>Increment</Button>
    </section>
  );
};
