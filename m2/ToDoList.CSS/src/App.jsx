import { useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '할 일 생성'}, 
    { id: 2, task: '루비 주니 이노 세라'},
  ]);
  
  // 1. AddTask
  // 2. EditTask
  // 3. DeleteTask

  // 랜더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form>
        <input type='text' />
        <button type='submit'>등록</button>
      </form>

      <div>{todos.map((todo, _) => console.log(todo))}</div>
    </>
  )
}

export default App
