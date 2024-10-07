import React from 'react';

function AddTask({ txt, setTxt, addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (txt.trim()) {
      addTodo(txt);
      setTxt('');
    } else {
      alert('입력해주세요~!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={txt}
        onChange={(e) => setTxt(e.target.value)}
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default AddTask;
