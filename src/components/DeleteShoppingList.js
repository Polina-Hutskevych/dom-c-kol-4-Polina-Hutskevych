import React from 'react';
import './DeleteShoppingList.css';

function DeleteShoppingList({ onClose, onDelete, listTitle }) {
  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <h3>Are you sure you want to delete "{listTitle}"?</h3>
        <div className="modal-buttons">
          <button onClick={onDelete} className="delete-button">Confirm</button>
          <button onClick={onClose} className="cancel-button">Back</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteShoppingList;
