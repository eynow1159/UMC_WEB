import React from "react";
import "./App.css";
import AddTask from './components/AddTask';
import DoTasks from './components/DoTasks';
import SetPage from './pages/SetPage';

// const App = () => {
//   return (
//       <SetPage></SetPage>
//   );
// };

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '할 일 생성' },
    { id: 2, task: '루비 주니 이노 세라' },
  ]);
  const [txt, setTxt] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editTxt, setEditTxt] = useState('');

  const addTodo = (task) => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100 + 2), task },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, task) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task } : item))
    );
    setEditingId('');
  };

  return (
    <>
      <AddTask txt={txt} setTxt={setTxt} addTodo={addTodo} />
      <DoTasks
        todos={todos}
        editingId={editingId}
        setEditingId={setEditingId}
        editTxt={editTxt}
        setEditTxt={setEditTxt}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default App;
