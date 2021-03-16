import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>和 Mine Owner 合作的 OA 系统</h1>
        <p onClick={() => setCount((c) => c + 1)}>
          count is: {count}
        </p>
      </header>
    </div>
  );
}

export default App;
