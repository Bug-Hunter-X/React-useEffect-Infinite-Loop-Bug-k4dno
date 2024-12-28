```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is now corrected; the effect runs once after initial render.
    console.log("Effect ran");
  }, []); // Empty dependency array means it only runs once on mount

  return <div>Count: {count}</div>;
}

export default MyComponent;
```