import React from 'react';

function Edit({ isEditing, onClick }) {
  return (
    <button onClick={onClick}>{isEditing ? '완료' : '수정'}</button>
  );
}

export default Edit;
