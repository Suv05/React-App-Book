import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="tic-tac-toe-board">
        {Array(9).map((_, index) => (
          <div class="square" key={index}></div>
        ))}
      </div>
    </>
  );
}

export default App;
