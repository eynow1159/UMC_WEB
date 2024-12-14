import React, { useState } from 'react';
import '../styles/Form.css'

const TodoForm = () => {
  const [taskInput, setTaskInput] = useState('');  // 사용자가 입력한 텍스트를 관리하기 위한 상태 변수 taskInput을 선언합니다.
  const [tasks, setTasks] = useState([]);  // 해야 할 일 목록을 관리하는 상태 변수 tasks를 선언합니다.

  const handleInputChange = (e) => {  // 사용자가 입력 필드에 텍스트를 입력할 때마다 호출되는 함수입니다.
    setTaskInput(e.target.value);  // 입력된 값을 taskInput 상태에 업데이트합니다.
  };

  const handleAddTask = (e) => {  // 사용자가 Enter 키를 눌렀을 때 호출되는 함수입니다.
    e.preventDefault();
    if (e.key === 'Enter' && taskInput.trim()) {  // 만약 Enter 키를 눌렀고, 입력 필드가 비어있지 않다면
      setTasks([...tasks, { id: Date.now(), name: taskInput }]);  // 현재 tasks 배열에 새로 입력된 task를 추가합니다.
      setTaskInput('');  // 입력 필드를 초기화합니다.
    }
  };

  return (
    <div className='InputBox'>
      <input
        type="text"
        placeholder="스터디 계획을 작성해보세요!"
        value={taskInput}
        onChange={handleInputChange}  // 입력 필드의 값이 변경될 때마다 handleInputChange 함수를 호출합니다.
        onKeyDown={handleAddTask}  // 키를 눌렀을 때 handleAddTask 함수를 호출합니다.
      />
    </div>
  );
};

export default TodoForm;
