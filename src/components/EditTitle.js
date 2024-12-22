import React, { useState } from 'react';
import './EditTitle.css'
function EditTitle({ title, onTitleChange, canEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    if (isEditing) {
      onTitleChange(newTitle);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <div className="edit-title-container">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={handleChange}
          placeholder="Edit title"
          className="edit-input"
        />
      ) : (
        <h1 className="shopping-list-title">{title}</h1>
      )}
      {canEdit && (
        <button onClick={handleEdit} className="edit-button">
          {isEditing ? 'Save' : 'Edit Title'}
        </button>
      )}
    </div>
  );
}

export default EditTitle;