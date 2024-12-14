import React, { useState } from 'react';
import '../styles/SetPage.css'
import '../styles/List.css'

import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import DoneList from '../components/DoneList';

export default function SetPage () {
  const [taskInput, setTaskInput] = useState('');  // 입력된 텍스트를 관리하는 상태
  const [tasks, setTasks] = useState([]);  // 해야 할 일 목록을 관리하는 상태
  const [completedTasks, setCompletedTasks] = useState([]);  // 해낸 일 목록을 관리하는 상태

  return (
    <div className='Center'>
      <Header />
      {/*입력*/}
        <TodoForm 
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        tasks={tasks}
        setTasks={setTasks}
        />
        <div className='AllList'>
          {/*왼쪽 리스트*/}
          <TodoList 
            tasks={tasks} 
            setTasks={setTasks} 
            completedTasks={completedTasks} 
            setCompletedTasks={setCompletedTasks} 
          />
          {/*오른쪽 리스트*/}
          <DoneList 
            completedTasks={completedTasks} 
            setCompletedTasks={setCompletedTasks} 
          />
        </div>
    </div>
  );
}