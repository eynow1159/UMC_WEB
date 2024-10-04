import { useState } from 'react';
import './App.css'

function App() {

  // DoTasks 화면에 출력되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([
    { id: 1, task: '할 일 생성'}, 
    { id: 2, task: '루비 주니 이노 세라'},
  ]);
  
  const [txt, setTxt] = useState('');
  // console.log(txt)
  // console.log(todos.filter((todo) => console.log(todo)));

  const [editingId, setEditingId] = useState('');
  // console.log(editingId)

  const [editTxt, setEditTxt] = useState('');
  // console.log(editTxt)

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  // 1. AddTask
  const addTodo = () => {
    if (txt.trim().length === 0) {
      alert('입력해주세요~!');
    }
    setTodos((prev) => [

      ...prev,
      {id: Math.floor(Math.random() * 100 + 2), task: txt},
    ]);

    setTxt('');
  };

  // 2. DeleteTask
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  
  // 3. EditTask(핵심)
  const updateTodo = (id, txt) => {
    setTodos((prev) => 
      prev.map((item) => 
        (item.id === id ? {...item, task: txt} : item ))
    );
    setEditingId('');
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          value={txt} 
          onChange={(e) => setTxt(e.target.value)}
        />
        <button onClick={() => addTodo()} type='submit'>
          등록
        </button>
      </form>

      <div>
        {todos.map((todo, _) => ( 
          <div style={{dixplay: 'flex', gap: '20px'}}>
            {/* 수정 아닐 때: editingId !== todo.id */}
            {editingId !== todo.id && (
              <div key={todo.id} style={{dixplay: 'flex', gap: '5px'}}>
                <p>{todo.id}. </p>
                <p>{todo.task}</p>
              </div>
            )}
            {/* 수정 중 일 때: editingId === todo.id */}
            {editingId === todo.id && (
              <div key={todo.id} style={{dixplay: 'flex', gap: '5px'}}>
                <p>{todo.id}. </p>
                <input defaultValue={todo.task} onChange={(e) => setEditTxt(e.target.value)}/>
              </div>
            )}
          
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>

            {/* 수정 아닐 때: editingId !== todo.id */}
            {/* 수정 중 일 때: editingId === todo.id */}
            {editingId === todo.id ? 
            <button onClick={() => updateTodo(editingId, editTxt)}>완료</button> : 
            <button onClick={() => setEditingId(todo.id)}>수정</button>
            }
            
            </div>
        ))}
      </div>
    </>
  )
}

export default App
