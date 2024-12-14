import React, { useState } from 'react';
import '../styles/List.css'

const TodoList = () => {
  const [tasks, setTasks] = useState([]);  // 해야 할 일 목록을 관리하는 상태 변수 tasks를 선언합니다.
  const [completedTasks, setCompletedTasks] = useState([]);  // 해낸 일 목록을 관리하는 상태 변수 completedTasks를 선언합니다.

  const handleCompleteTask = (id) => {  // 완료 버튼을 눌렀을 때 호출되는 함수입니다.
    const taskToComplete = tasks.find(task => task.id === id);  // 완료하려는 task를 tasks 배열에서 찾습니다.
    setTasks(tasks.filter(task => task.id !== id));  // 해당 task를 tasks 배열에서 제거합니다.
    setCompletedTasks([...completedTasks, taskToComplete]);  // 해당 task를 completedTasks 배열에 추가합니다.
  };
  
  return (
    <div className='List'>
      <h2>해야 할 일</h2>
      {tasks.map(task => (
        <div className='Task' key={task.id} style={{ margin: '10px 0' }}>
          <span>{task.name}</span>
          <button
            className='Button'
            onClick={() => handleCompleteTask(task.id)}
            style={{ marginLeft: '10px', backgroundColor: '#e0e0e0', border: 'none', padding: '5px 10px' }}>
            완료
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
