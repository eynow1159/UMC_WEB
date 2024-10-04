import './App.css'
import { useState } from 'react';

function App() {
  const [cnt1, setCnt1] = useState(0)
  const [cnt2, setCnt2] = useState(0)
  
  
  const handleIncreaseNumber1 = () => {
    setCnt1(cnt1+1);
  }
  
  const handleIncreaseNumber2 = () => {
    setCnt2(cnt2 => cnt2+1);
    setCnt2(cnt2 => cnt2+1);
  }
  return (
    <>
      <h1>{cnt1}</h1>
      <button onClick={handleIncreaseNumber1}>1 증가</button>

      <h1>{cnt2}</h1>
      <button onClick={handleIncreaseNumber2}>2 증가</button>
    </>
  )
}

export default App
