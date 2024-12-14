import React, { useState } from 'react';
import '../styles/List.css'

const DoneList = () => {
  const [completedTasks, setCompletedTasks] = useState([]);  // 해낸 일 목록을 관리하는 상태 변수 completedTasks를 선언합니다.

  const handleDeleteCompletedTask = (id) => {  // 삭제 버튼을 눌렀을 때 호출되는 함수입니다.
    setCompletedTasks(completedTasks.filter(task => task.id !== id));  // 해당 task를 completedTasks 배열에서 제거합니다.
  };  
  
  return (
    <div className='List'>
      <h2>해낸 일</h2>
      {completedTasks.map(task => (
        <div className='Task' key={task.id} style={{ margin: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
          <span>{task.name}</span>
          <button
            className='Button'
            onClick={() => handleDeleteCompletedTask(task.id)}
            style={{ marginLeft: '10px', backgroundColor: '#e0e0e0', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default DoneList;
