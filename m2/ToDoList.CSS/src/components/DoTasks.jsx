import React from 'react';
import DoTask from './Button/DoTask';

function DoTasks({
  todos,
  editingId,
  setEditingId,
  editTxt,
  setEditTxt,
  deleteTodo,
  updateTodo,
}) {
  return (
    <div>
      {todos.map((todo) => (
        <DoTask
          key={todo.id}
          todo={todo}
          editingId={editingId}
          setEditingId={setEditingId}
          editTxt={editTxt}
          setEditTxt={setEditTxt}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default DoTasks;
