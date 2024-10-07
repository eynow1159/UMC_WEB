import React from 'react';
import Delete from './Delete';
import Edit from './Edit';

function DoTask({
  todo,
  editingId,
  setEditingId,
  editTxt,
  setEditTxt,
  deleteTodo,
  updateTodo,
}) {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {editingId !== todo.id ? (
        <>
          <div style={{ display: 'flex', gap: '5px' }}>
            <p>{todo.id}. </p>
            <p>{todo.task}</p>
          </div>
          <Edit isEditing={false} onClick={() => setEditingId(todo.id)} />
        </>
      ) : (
        <>
          <div style={{ display: 'flex', gap: '5px' }}>
            <p>{todo.id}. </p>
            <input
              defaultValue={todo.task}
              onChange={(e) => setEditTxt(e.target.value)}
            />
          </div>
          <Edit
            isEditing={true}
            onClick={() => updateTodo(editingId, editTxt)}
          />
        </>
      )}
      <Delete onClick={() => deleteTodo(todo.id)} />
    </div>
  );
}

export default DoTask;
