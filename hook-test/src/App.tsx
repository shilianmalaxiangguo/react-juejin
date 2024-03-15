import {useState} from 'react';

function App() {
  function initNum () {
    const num1 = 1 + 2;
    const num2 = 3 + 4;
    return num1 + num2;
  }
  const [num, setNum] = useState(initNum())

  return (
    <div onClick={() => setNum( num + 1)}>{num}</div>
  );
}

export default App;
