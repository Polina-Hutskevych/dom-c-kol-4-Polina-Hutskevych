import React from 'react';
import './DeleteItem.css'

function DeleteItem({ onDelete }) {
    return (
        <button onClick={onDelete} className="delete-button">
            ✕
        </button>
    );
}

export default DeleteItem;